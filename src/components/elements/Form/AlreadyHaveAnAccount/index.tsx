import { type FC } from 'react';

import type { ITheme } from '@ts/interfaces';

import * as S from './styles';

interface AlreadyHaveAnAccountProps extends ITheme {
  alreadyHave?: boolean;
}

const AlreadyHaveAnAccount: FC<AlreadyHaveAnAccountProps> = ({ alreadyHave, $themeColor }) => {
  const message = alreadyHave ? 'Ainda não possui' : 'Já possui';
  const href = alreadyHave ? '/sign-up' : '/sign-in';

  return (
    <S.Container>
      <S.Text $themeColor={$themeColor}>
        {message}
      </S.Text>{' '}
      <S.StyledLink
        $themeColor={$themeColor}
        href={href}
      >
        uma conta?
      </S.StyledLink>
    </S.Container>
  );
};

export default AlreadyHaveAnAccount;
