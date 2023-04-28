import { type FC } from 'react';

import { Container, StyledLink } from './styles';

interface AlreadyHaveAnAccountProps {
  alreadyHave?: boolean;
}

const AlreadyHaveAnAccount: FC<AlreadyHaveAnAccountProps> = ({ alreadyHave }) => {
  const message = alreadyHave ? 'Ainda não possui' : 'Já possui';
  const href = alreadyHave ? '/sign-up' : '/sign-in';

  return (
    <Container>
      <span>
        {message}
      </span>{' '}
      <StyledLink href={href}>
        uma conta?
      </StyledLink>
    </Container>
  );
};

export default AlreadyHaveAnAccount;
