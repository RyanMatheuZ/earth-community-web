import { type NextPage } from 'next';

import { useForm, type SubmitHandler } from 'react-hook-form';

import type { ISignUp } from '@ts/interfaces';

import { useAuth } from '@context/auth';

import {
  AlreadyHaveAnAccount,
  Field,
  FormSection,
  FormTitle,
  SubmitButton
} from '@components/elements';
import { Head } from '@components/meta';
import { HalfToHalfContainer, HeaderWithBackButton } from '@components/modules';

import { title, description } from './head';

import { signUpDefaultValues, schema } from './utils';

import * as S from './styles';

const SignUp: NextPage = () => {
  const { handleSignUp, isLoadingSignUp } = useAuth();

  const { control, handleSubmit, formState: { errors } } = useForm<ISignUp>({
    mode: 'onChange',
    defaultValues: signUpDefaultValues,
    resolver: schema
  });

  const onSubmit: SubmitHandler<ISignUp> = (signUpValues) => {
    handleSignUp({
      ...signUpValues,
      authWith: 'manually'
    });
  };

  return (
    <>
      <Head
        title={title}
        description={description}
      />
      <S.Container>
        <HeaderWithBackButton $themeColor='white' />
        <FormSection $themeColor='white'>
          <FormTitle $themeColor='green'>
            Você está prestes a dar o seu primeiro passo em <br /> direção a um futuro sustentável!
          </FormTitle>
          <form onSubmit={handleSubmit(onSubmit)}>
            <HalfToHalfContainer>
              <Field
                control={control}
                errors={errors}
                type='text'
                name='firstName'
                label='Nome:'
              />
              <Field
                control={control}
                errors={errors}
                type='text'
                name='surname'
                label='Sobrenome:'
              />
            </HalfToHalfContainer>
            <Field
              control={control}
              errors={errors}
              type='email'
              name='email'
              label='E-mail:'
            />
            <Field
              control={control}
              errors={errors}
              type='password'
              name='password'
              label='Senha:'
            />
            <Field
              control={control}
              errors={errors}
              type='password'
              name='confirmPassword'
              label='Confirmar senha:'
            />
            <SubmitButton
              label='Enviar'
              isLoadingAction={isLoadingSignUp}
            />
          </form>
          <AlreadyHaveAnAccount $themeColor='green' />
        </FormSection>
      </S.Container>
    </>
  );
};

export default SignUp;
