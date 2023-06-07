import { type FC } from 'react';

import { useAuth } from '@context/auth';

import * as S from './styles';

const LogoutButton: FC = () => {
  const { handleSignOut } = useAuth();

  return (
    <S.Container onClick={() => handleSignOut()}>
      <S.LogoutIcon /> Sair
    </S.Container>
  );
};

export default LogoutButton;
