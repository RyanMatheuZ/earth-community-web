import { type FC } from 'react';

import type { ITheme } from '@ts/interfaces';

import { Container, Text, StyledLink } from './styles';

interface AlreadyHaveAnAccountProps extends ITheme {
  alreadyHave?: boolean;
}

const AlreadyHaveAnAccount: FC<AlreadyHaveAnAccountProps> = ({ alreadyHave, $themeColor }) => {
  const message = alreadyHave ? 'Ainda não possui' : 'Já possui';
  const href = alreadyHave ? '/sign-up' : '/sign-in';

  return (
    <Container>
      <Text $themeColor={$themeColor}>
        {message}
      </Text>{' '}
      <StyledLink
        $themeColor={$themeColor}
        href={href}
      >
        uma conta?
      </StyledLink>
    </Container>
  );
};

export default AlreadyHaveAnAccount;
