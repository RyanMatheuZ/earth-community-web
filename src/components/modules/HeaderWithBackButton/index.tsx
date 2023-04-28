import { type FC } from 'react';

import { IconButton } from '@mui/material';

import { BackIcon, Logo } from '@components/elements';

import { Container } from './styles';

interface HeaderWithBackButtonProps {
  handleClickBackButton: () => void;
}

const HeaderWithBackButton: FC<HeaderWithBackButtonProps> = ({ handleClickBackButton }) => {
  return (
    <Container>
      <IconButton onClick={handleClickBackButton}>
        <BackIcon />
      </IconButton>
      <Logo showOnlyImage />
    </Container>
  );
};

export default HeaderWithBackButton;
