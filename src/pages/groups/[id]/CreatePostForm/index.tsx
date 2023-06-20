import { type FC } from 'react';

import { useForm, type SubmitHandler } from 'react-hook-form';

import { useMutation } from '@tanstack/react-query';

import { CircularProgress } from '@mui/material';

import { useAuth } from '@context/auth';

import { usePost, useFilePreview, useImageUpload } from '@hooks/index';
import { type CreatePostParams } from '@hooks/usePost/utils';

import { queryClient } from '@services/tanstackQuery';

import { ErrorMessage, Field, InputFile, SubmitButton } from '@components/elements';

import { schema, postDefaultValues, type PostDefaultValues } from './utils';

import * as S from './styles';

interface CreatePostFormProps {
  groupId: string;
  handleToggleModal: () => void;
}

const CreatePostForm: FC<CreatePostFormProps> = ({ groupId, handleToggleModal }) => {
  const { user } = useAuth();

  const {
    control, register, handleSubmit, watch, formState: { errors }
  } = useForm<PostDefaultValues>({
    mode: 'onChange',
    defaultValues: postDefaultValues,
    resolver: schema
  });

  const imageDescription = 'Imagem da publicação';

  const { '0': file } = watch(['image']);

  const { handleCreatePost } = usePost();
  const { imageURL: previewImageURL } = useFilePreview(file as unknown as FileList);
  const { progress: imageUploadProgress, handleUpload } = useImageUpload();

  const { mutate, isLoading: isUpdatingUser, isPaused: isUserUpdatedPaused } = useMutation(
    ({ userId, postValues }: CreatePostParams) => handleCreatePost({ userId, groupId, postValues }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['all-posts-by-group-id']);
        handleToggleModal();
      }
    }
  );

  const isLoadingAction = isUpdatingUser || isUserUpdatedPaused || !!imageUploadProgress;

  const onSubmit: SubmitHandler<PostDefaultValues> = async (postValues) => {
    const image = await handleUpload(
      file?.[0] as unknown as File,
      'post-image',
      `${user?._id}`
    );

    return mutate({
      userId: user?._id as string,
      groupId: groupId,
      postValues: {
        image,
        text: postValues.text
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field
        control={control}
        errors={errors}
        multiline
        minRows={3}
        spellCheck={false}
        type='text'
        name='text'
        label='Escreva algo aqui:'
        $themeColor='green'
      />
      <S.ImageContainer>
        <S.StyledImagePreview
          src={previewImageURL}
          alt=''
          title={imageDescription}
          fill
        />
        <S.IconContainer title='Escolha a imagem da publicação...'>
          <InputFile
            register={register}
            name='image'
            label={<S.WallpaperIcon />}
          />
        </S.IconContainer>
      </S.ImageContainer>
      <S.ImageErrorMessage>
        <ErrorMessage name='image' errors={errors} $themeColor='green' />
      </S.ImageErrorMessage>
      {!!imageUploadProgress && (
        <S.ImageUploadingMessage>
          Carregando imagem... <CircularProgress color='secondary' size={20} />
        </S.ImageUploadingMessage>
      )}
      <SubmitButton
        label='Publicar'
        isLoadingAction={isLoadingAction}
        $themeColor='green'
      />
    </form>
  );
};

export default CreatePostForm;
