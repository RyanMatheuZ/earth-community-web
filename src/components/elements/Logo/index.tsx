import { type FC } from 'react';

import Image, { ImageProps } from 'next/image';

import type { ITheme } from '@ts/interfaces';

import * as S from './styles';

interface LogoProps extends ITheme {
  showOnlyImage?: boolean;
  width?: ImageProps['width'];
  height?: ImageProps['height'];
}

const Logo: FC<LogoProps> = ({ showOnlyImage, width = 60, height = 60, $themeColor }) => {
  const textLogo = 'Earth Community';

  return (
    <S.Container>
      <Image
        src={`/medias/logo-${$themeColor}.svg`}
        alt={textLogo}
        title={textLogo}
        width={width}
        height={height}
        draggable={false}
      />
      {!showOnlyImage && (
        <S.Title $themeColor={$themeColor}>
          {textLogo}
        </S.Title>
      )}
    </S.Container>
  );
};

export default Logo;
