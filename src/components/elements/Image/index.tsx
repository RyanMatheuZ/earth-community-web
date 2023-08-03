import { type FC } from 'react';

import NextImage, { ImageProps } from 'next/image';

import * as S from './styles';

const Image: FC<ImageProps> = ({
  draggable = false,
  loading = 'lazy',
  width,
  height,
  ...props
}) => {
  return (
    <S.Container
      width={width}
      height={height}
    >
      <NextImage
        draggable={draggable}
        loading={loading}
        {...props}
      />
    </S.Container>
  );
};

export default Image;
