import { type FC } from 'react';

import { useRouter } from 'next/router';

import { IconButton } from '@mui/material';

import type { ITheme } from '@ts/interfaces';

import { BackIcon, Logo } from '@components/elements';

import { Container } from './styles';

interface HeaderWithBackButtonProps extends ITheme {
  handleClickBackButton?: () => void;
}

const HeaderWithBackButton: FC<HeaderWithBackButtonProps> = ({ handleClickBackButton, $themeColor }) => {
  const { back } = useRouter();

  const backButtonAndLogo$themeColor = $themeColor === 'white' ? 'green' : 'white';

  return (
    <Container $themeColor={$themeColor}>
      <IconButton onClick={handleClickBackButton ? handleClickBackButton : back }>
        <BackIcon $themeColor={backButtonAndLogo$themeColor} />
      </IconButton>
      <Logo
        showOnlyImage
        $themeColor={backButtonAndLogo$themeColor}
      />
    </Container>
  );
};

export default HeaderWithBackButton;
