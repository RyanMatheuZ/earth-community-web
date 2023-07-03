import { type FC } from 'react';

import { useForm, type SubmitHandler } from 'react-hook-form';

import { useMutation } from '@tanstack/react-query';

import { MenuItem, CircularProgress } from '@mui/material';

import { useAuth } from '@context/auth';

import { useGroup, useFilePreview, useImageUpload } from '@hooks/index';
import { type CreateGroupParams } from '@hooks/useGroup/utils';

import { queryClient } from '@services/tanstackQuery';

import { ErrorMessage, Field, InputFile, Select, SubmitButton, UserPictureProfile } from '@components/elements';
import { HalfToHalfContainer, TwoThirdContainer } from '@components/modules';

import { categories } from '@utils/datas/categories/utils';
import { states } from '@utils/datas/states';

import { schema, groupDefaultValues, type GroupDefaultValues } from './utils';

import * as S from './styles';

interface CreateGroupFormProps {
  handleToggleModal: () => void;
}

const CreateGroupForm: FC<CreateGroupFormProps> = ({ handleToggleModal }) => {
  const { user } = useAuth();

  const {
    control, register, handleSubmit, watch, formState: { errors }
  } = useForm<GroupDefaultValues>({
    mode: 'onChange',
    defaultValues: groupDefaultValues,
    resolver: schema
  });

  const { '0': file } = watch(['image']);

  const { handleCreateGroup } = useGroup();
  const { imageURL: previewImageURL } = useFilePreview(file as unknown as FileList);
  const { progress: imageUploadProgress, handleUpload } = useImageUpload();

  const { mutate, isLoading: isUpdatingUser, isPaused: isUserUpdatedPaused } = useMutation(
    ({ userId, groupValues }: CreateGroupParams) => handleCreateGroup({ userId, groupValues }),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(['all-groups']);
        handleToggleModal();
      }
    }
  );

  const isLoadingAction = isUpdatingUser || isUserUpdatedPaused || !!imageUploadProgress;

  const onSubmit: SubmitHandler<GroupDefaultValues> = async (groupValues) => {
    const image = await handleUpload(
      file?.[0] as unknown as File,
      'group-image',
      `${groupValues.name}-${user?._id}`
    );

    return mutate({
      userId: user?._id as string,
      groupValues: {
        image,
        name: groupValues.name,
        category: groupValues.category,
        description: groupValues.description,
        headOffice: {
          city: groupValues.city,
          state: groupValues.state
        }
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.ImageContainer>
        <UserPictureProfile
          pictureProfileSRC={previewImageURL}
          userName='Foto do grupo'
          width='120'
          height='120'
        />
        <S.EditIconContainer>
          <InputFile
            register={register}
            name='image'
            label={<S.EditIcon />}
          />
        </S.EditIconContainer>
      </S.ImageContainer>
      <S.ImageErrorMessage>
        <ErrorMessage name='image' errors={errors} />
      </S.ImageErrorMessage>
      {!!imageUploadProgress && (
        <S.ImageUploadingMessage>
          Carregando imagem... <CircularProgress color='secondary' size={20} />
        </S.ImageUploadingMessage>
      )}
      <S.SectionLabel>Informações básicas</S.SectionLabel>
      <HalfToHalfContainer>
        <Field
          control={control}
          errors={errors}
          type='text'
          name='name'
          label='Nome:'
        />
        <Select
          control={control}
          errors={errors}
          type='text'
          name='category'
          label='Categorias:'
        >
          {categories.map(({ label, icon }, index) => (
            <S.StyledMenuItem
              key={`categorie-${label}-${index}`}
              value={label}
            >
              {icon}  {label}
            </S.StyledMenuItem>
          ))}
        </Select>
      </HalfToHalfContainer>
      <Field
        control={control}
        errors={errors}
        multiline
        minRows={3}
        spellCheck={false}
        type='text'
        name='description'
        label='Descrição:'
      />
      <S.SectionLabel>Localidade</S.SectionLabel>
      <TwoThirdContainer>
        <Field
          control={control}
          errors={errors}
          type='text'
          name='city'
          label='Cidade:'
        />
        <Select
          control={control}
          errors={errors}
          type='text'
          name='state'
          label='Estado:'
        >
          {states.map((state, index) => (
            <MenuItem
              key={`state-${state}-${index}`}
              value={state}
            >
              {state}
            </MenuItem>
          ))}
        </Select>
      </TwoThirdContainer>
      <SubmitButton
        label='Criar'
        isLoadingAction={isLoadingAction}
      />
    </form>
  );
};

export default CreateGroupForm;
