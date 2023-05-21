import { type NextPage } from 'next';

import { useForm, type SubmitHandler } from 'react-hook-form';

import type { ISignIn } from '@ts/interfaces';

import { useAuth } from '@context/auth';

import {
  AlreadyHaveAnAccount,
  AnotherAuthOption,
  Field,
  FormSection,
  FormTitle,
  SubmitButton
} from '@components/elements';
import { Head } from '@components/meta';
import { HeaderWithBackButton } from '@components/modules';

import { title, description } from './head';

import { signInDefaultValues, schema } from './utils';

import * as S from './styles';

const SignIn: NextPage = () => {
  const { handleSignIn, isLoadingSignIn } = useAuth();

  const { control, handleSubmit, formState: { errors } } = useForm<ISignIn>({
    mode: 'onChange',
    defaultValues: signInDefaultValues,
    resolver: schema
  });

  const onSubmit: SubmitHandler<ISignIn> = (signInValues) => {
    handleSignIn({
      ...signInValues,
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
        <HeaderWithBackButton $themeColor='green' />
        <FormSection $themeColor='green'>
          <FormTitle $themeColor='white'>
            Bem-vindo(a) de volta! Entre e continue a trilhar o <br /> caminho da preservação junto conosco!
          </FormTitle>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Field
              control={control}
              errors={errors}
              type='text'
              name='email'
              label='E-mail:'
              $themeColor='white'
            />
            <Field
              control={control}
              errors={errors}
              type='password'
              name='password'
              label='Senha:'
              $themeColor='white'
            />
            <SubmitButton
              label='Enviar'
              isLoadingAction={isLoadingSignIn}
              $themeColor='white'
            />
          </form>
          <AnotherAuthOption $themeColor='white' />
          <AlreadyHaveAnAccount
            alreadyHave
            $themeColor='white'
          />
        </FormSection>
      </S.Container>
    </>
  );
};

export default SignIn;
