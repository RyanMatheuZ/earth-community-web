import { type FC } from 'react';

import Link from 'next/link';

import { Divider } from '@mui/material';

import { useAuth } from '@context/auth';

import * as S from './styles';

interface ShortcutsProps {
  isOpenMenu: boolean;
  handleToggleMenu: () => void;
}

const Shortcuts: FC<ShortcutsProps> = ({ isOpenMenu, handleToggleMenu }) => {
  const { user, handleSignOut } = useAuth();

  return (
    <S.StyledMenu
      open={isOpenMenu}
      onClose={handleToggleMenu}
    >
      <Link href={`/${user?.info.nickName}`}>
        <S.StyledMenuItem>
          <S.MenuContent>
            <S.ViewProfileIcon /> Ver perfil
          </S.MenuContent>
          <S.ArrowIcon />
        </S.StyledMenuItem>
      </Link>
      <Divider />
      <S.StyledMenuItem onClick={() => handleSignOut()}>
        <S.MenuContent>
          <S.LogoutIcon /> Sair
        </S.MenuContent>
        <S.ArrowIcon />
      </S.StyledMenuItem>
    </S.StyledMenu>
  );
};

export default Shortcuts;
