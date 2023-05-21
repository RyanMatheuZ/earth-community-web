import { useState, type FC } from 'react';

import Link from 'next/link';

import { Drawer as MuiDrawer, IconButton } from '@mui/material';

import { Logo, MenuIcon, RedirectLinkForDonation } from '@components/elements';

import { dropdownItems } from '../utils';

import * as S from './styles';

const Drawer: FC = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const handleToggleDrawer = () => {
    setIsOpenDrawer((prevState) => !prevState);
  };

  return (
    <S.Container>
      <Logo
        showOnlyImage
        $themeColor='green'
      />
      <IconButton onClick={handleToggleDrawer}>
        <MenuIcon />
      </IconButton>
      <MuiDrawer
        open={isOpenDrawer}
        onClose={handleToggleDrawer}
      >
        <S.StyledList>
          <S.LinkContainer>
            {dropdownItems.map(({ icon, label, path, target }, index) => (
              <Link
                key={`drawer-${label}-${index}`}
                href={path}
                target={target}
              >
                <S.StyledListItem onClick={handleToggleDrawer}>
                  {icon} {label}
                </S.StyledListItem>
              </Link>
            ))}
          </S.LinkContainer>
          <S.ButtonContainer>
            <RedirectLinkForDonation />
            <S.CloseDrawerButton onClick={handleToggleDrawer}>
              <S.CloseIcon /> Fechar
            </S.CloseDrawerButton>
          </S.ButtonContainer>
        </S.StyledList>
      </MuiDrawer>
    </S.Container>
  );
};

export default Drawer;
