import { type FC } from 'react';

import Image from 'next/image';

import type { ITheme } from '@ts/interfaces';

import { Container, Title } from './styles';

interface LogoProps extends ITheme {
  showOnlyImage?: boolean;
}

const Logo: FC<LogoProps> = ({ showOnlyImage, $themeColor }) => {
  const textLogo = 'Earth Community';

  return (
    <Container>
      <Image
        src={`/medias/logo-${$themeColor}.svg`}
        alt={textLogo}
        title={textLogo}
        width='60'
        height='60'
        draggable={false}
      />
      {!showOnlyImage && (
        <Title $themeColor={$themeColor}>
          {textLogo}
        </Title>
      )}
    </Container>
  );
};

export default Logo;
