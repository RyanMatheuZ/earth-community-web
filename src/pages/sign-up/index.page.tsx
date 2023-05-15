import { type NextPage } from 'next';

import { useForm, type SubmitHandler } from 'react-hook-form';

import type { ISignUp } from '@ts/interfaces';

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
import { HalfToHalfContainer, HeaderWithBackButton } from '@components/modules';

import { title, description } from './head';

import { signUpDefaultValues, schema } from './utils';

import { Container } from './styles';

const SignUp: NextPage = () => {
  const { handleSignUp, isLoadingSignUp } = useAuth();

  const { control, handleSubmit, formState: { errors } } = useForm<ISignUp>({
    mode: 'onChange',
    defaultValues: signUpDefaultValues,
    resolver: schema
  });

  const onSubmit: SubmitHandler<ISignUp> = (signUpValues) => {
    handleSignUp(signUpValues);
  };

  return (
    <>
      <Head
        title={title}
        description={description}
      />
      <Container>
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
            <Field
              control={control}
              errors={errors}
              type='email'
              name='email'
              label='E-mail:'
              $themeColor='green'
            />
            <Field
              control={control}
              errors={errors}
              type='password'
              name='password'
              label='Senha:'
              $themeColor='green'
            />
            <Field
              control={control}
              errors={errors}
              type='password'
              name='confirmPassword'
              label='Confirmar senha:'
              $themeColor='green'
            />
            <SubmitButton
              label='Enviar'
              isLoadingAction={isLoadingSignUp}
              $themeColor='green'
            />
          </form>
          <AnotherAuthOption $themeColor='green' />
          <AlreadyHaveAnAccount $themeColor='green' />
        </FormSection>
      </Container>
    </>
  );
};

export default SignUp;
