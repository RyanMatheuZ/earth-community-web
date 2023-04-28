import { type NextPage } from 'next';
import { useRouter } from 'next/navigation';

import { useForm, type SubmitHandler } from 'react-hook-form';

import type { ISignUp } from '@ts/interfaces';

import { useAuth } from '@context/auth';

import { Field, SubmitButton, AlreadyHaveAnAccount } from '@components/elements';
import { Head } from '@components/meta';
import { HalfToHalfContainer, HeaderWithBackButton } from '@components/modules';

import { title, description } from './head';

import { signUpDefaultValues, schema } from './utils';

import { Container, Title, FormSection } from './styles';

const SignUp: NextPage = () => {
  const { handleSignUp, isLoadingSignUp } = useAuth();

  const { back } = useRouter();

  const { control, handleSubmit, formState: { errors } } = useForm<ISignUp>({
    mode: 'onChange',
    defaultValues: signUpDefaultValues,
    resolver: schema
  });

  const handleRedirectToPreviousPage = () => {
    back();
  };

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
        <HeaderWithBackButton handleClickBackButton={handleRedirectToPreviousPage} />
        <FormSection>
          <Title>
            Você está prestes a dar o seu primeiro passo em <br /> direção a um futuro sustentável!
          </Title>
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
          <AlreadyHaveAnAccount />
        </FormSection>
      </Container>
    </>
  );
};

export default SignUp;
