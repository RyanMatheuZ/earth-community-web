import { type FC } from 'react';

import { useRouter } from 'next/router';

import { useForm, type SubmitHandler } from 'react-hook-form';

import { useMutation } from '@tanstack/react-query';

import { MenuItem } from '@mui/material';

import { useAuth } from '@context/auth';

import { useUser, useFilePreview, useImageUpload } from '@hooks/index';
import { UpdatedUserParams } from '@hooks/useUser/utils';

import { ErrorMessage, Field, InputDate, InputFile, Select, SubmitButton, UserPictureProfile } from '@components/elements';
import { HalfToHalfContainer, TwoThirdContainer } from '@components/modules';

import { formatPhoneNumber } from '@utils/inputs/phone';
import { states } from '@utils/datas/states';

import { getUserDefaultValues, schema, type UserDefaultValues } from './utils';

import * as S from './styles';

interface UserProfileEditFormProps {
  userDefaultValues?: UserDefaultValues;
}

const UserProfileEditForm: FC<UserProfileEditFormProps> = ({ userDefaultValues }) => {
  const { user } = useAuth();
  const { replace } = useRouter();

  const {
    control, register, handleSubmit, watch, setValue, formState: { errors, defaultValues }
  } = useForm<UserDefaultValues>({
    mode: 'onChange',
    defaultValues: getUserDefaultValues(userDefaultValues),
    resolver: schema
  });

  const { '0': file } = watch(['pictureProfile']);

  const userName = `${user?.info.firstName} ${user?.info.surname}`;
  const isUrlOfImage = typeof file === 'string';

  const { handleUpdateUser } = useUser();
  const { imageURL: previewImageURL } = useFilePreview(file as unknown as FileList);
  const { handleUpload } = useImageUpload();

  const { mutate } = useMutation(
    ({ userId, userUpdatedValues }: UpdatedUserParams) => handleUpdateUser({ userId, userUpdatedValues }),
    {
      onSuccess: () => replace('/feed')
    }
  );

  const onSubmit: SubmitHandler<UserDefaultValues> = async (userEditedValues) => {
    const defaultOrNewImage = isUrlOfImage
      ? userEditedValues?.pictureProfile as string
      : await handleUpload(file?.[0] as unknown as File);

    mutate({
      userId: user?._id as string,
      userUpdatedValues: {
        info: {
          pictureProfile: defaultOrNewImage,
          nickName: userEditedValues?.nickName as string,
          firstName: userEditedValues?.firstName as string,
          surname: userEditedValues?.surname as string,
          email: userEditedValues?.email as string,
          dateOfBirth: userEditedValues?.dateOfBirth as Date,
          phone: userEditedValues?.phone as string
        },
        address: {
          city: userEditedValues?.city as string,
          state: userEditedValues?.state as string
        }
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.PictureContainer>
        <UserPictureProfile
          pictureProfileSRC={previewImageURL || defaultValues?.pictureProfile}
          userName={userName}
          width='120'
          height='120'
        />
        <S.EditIconContainer>
          <InputFile
            register={register}
            name='pictureProfile'
            label={<S.EditIcon />}
          />
        </S.EditIconContainer>
      </S.PictureContainer>
      <S.PictureErrorMessage>
        <ErrorMessage name='pictureProfile' errors={errors} $themeColor='green' />
      </S.PictureErrorMessage>
      <S.SectionLabel>Informações básicas</S.SectionLabel>
      <HalfToHalfContainer>
        <Field
          control={control}
          errors={errors}
          type='text'
          name='firstName'
          label='Nome:'
          $themeColor='green'
        />
        <Field
          control={control}
          errors={errors}
          type='text'
          name='surname'
          label='Sobrenome:'
          $themeColor='green'
        />
      </HalfToHalfContainer>
      <HalfToHalfContainer>
        <Field
          control={control}
          errors={errors}
          type='text'
          name='nickName'
          label='Nome de usuário:'
          $themeColor='green'
        />
        <InputDate
          control={control}
          errors={errors}
          name='dateOfBirth'
          label='Data de Nascimento:'
          $themeColor='green'
        />
      </HalfToHalfContainer>
      <S.SectionLabel>Contatos</S.SectionLabel>
      <HalfToHalfContainer>
        <Field
          control={control}
          errors={errors}
          type='text'
          name='email'
          label='E-mail:'
          $themeColor='green'
        />
        <Field
          control={control}
          errors={errors}
          type='text'
          name='phone'
          label='Celular:'
          $themeColor='green'
          onChange={({ target: { value } }) => setValue('phone', formatPhoneNumber(value))}
        />
      </HalfToHalfContainer>
      <S.SectionLabel>Localidade</S.SectionLabel>
      <TwoThirdContainer>
        <Field
          control={control}
          errors={errors}
          type='text'
          name='city'
          label='Cidade:'
          $themeColor='green'
        />
        <Select
          control={control}
          errors={errors}
          type='text'
          name='state'
          label='Estado:'
          $themeColor='green'
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
        label='Atualizar'
        $themeColor='green'
      />
    </form>
  );
};

export default UserProfileEditForm;