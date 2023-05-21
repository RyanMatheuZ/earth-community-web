import { type FC } from 'react';

import Image, { ImageProps } from 'next/image';

import type { ITheme } from '@ts/interfaces';

import { Container, Title } from './styles';

interface LogoProps extends ITheme {
  showOnlyImage?: boolean;
  width?: ImageProps['width'];
  height?: ImageProps['height'];
}

const Logo: FC<LogoProps> = ({ showOnlyImage, width = 60, height = 60, $themeColor }) => {
  const textLogo = 'Earth Community';

  return (
    <Container>
      <Image
        src={`/medias/logo-${$themeColor}.svg`}
        alt={textLogo}
        title={textLogo}
        width={width}
        height={height}
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
