import { useState, type FC } from 'react';

import Link from 'next/link';

import { Drawer as MuiDrawer, IconButton } from '@mui/material';

import { Logo, MenuIcon, RedirectLinkForDonation } from '@components/elements';

import {
  Container,
  StyledList,
  StyledListItem,
  LinkContainer,
  ButtonContainer,
  CloseDrawerButton,
  CloseIcon
} from './styles';

import { dropdownItems } from '../utils';

const Drawer: FC = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const handleToggleDrawer = () => {
    setIsOpenDrawer((prevState) => !prevState);
  };

  return (
    <Container>
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
        <StyledList>
          <LinkContainer>
            {dropdownItems.map(({ icon, label, path, target }, index) => (
              <Link
                key={`drawer-${label}-${index}`}
                href={path}
                target={target}
              >
                <StyledListItem onClick={handleToggleDrawer}>
                  {icon} {label}
                </StyledListItem>
              </Link>
            ))}
          </LinkContainer>
          <ButtonContainer>
            <RedirectLinkForDonation />
            <CloseDrawerButton onClick={handleToggleDrawer}>
              <CloseIcon /> Fechar
            </CloseDrawerButton>
          </ButtonContainer>
        </StyledList>
      </MuiDrawer>
    </Container>
  );
};

export default Drawer;
