import { type FC } from 'react';

import Image from 'next/image';

import useGoogleAuth from '@hooks/useGoogleAuth';
import useFacebookAuth from '@hooks/useFacebookAuth';

import { Container, AuthButton } from './styles';

const AuthOptionsButton: FC = () => {
  const { handleSignIn: handleSignInWithGoogle } = useGoogleAuth();
  const { handleSignIn: handleSignInWithFacebook } = useFacebookAuth();

  const authOptions = [
    {
      label: 'Google',
      iconPath: '/icons/google-logo.svg',
      handleClick: () => handleSignInWithGoogle()
    },
    {
      label: 'Facebook',
      iconPath: '/icons/facebook-logo.svg',
      handleClick: () => handleSignInWithFacebook()
    }
  ];

  return (
    <Container>
      {authOptions.map(({ label, iconPath, handleClick }, index) => {
        const description = `Entrar com a sua conta do ${label}`;

        return (
          <AuthButton
            key={`auth-${label}-${index}`}
            title={description}
            onClick={handleClick}
          >
            <Image
              src={iconPath}
              alt={description}
              title={description}
              width='25'
              height='25'
            />
            {label}
          </AuthButton>
        );
      })}
    </Container>
  );
};

export default AuthOptionsButton;
