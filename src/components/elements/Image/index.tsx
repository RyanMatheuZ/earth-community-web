import { type FC } from 'react';

import NextImage, { ImageProps } from 'next/image';

import { Container } from './styles';

const Image: FC<ImageProps> = ({
  draggable = false,
  loading = 'lazy',
  width,
  height,
  ...props
}) => {
  return (
    <Container
      width={width}
      height={height}
    >
      <NextImage
        draggable={draggable}
        loading={loading}
        {...props}
      />
    </Container>
  );
};

export default Image;
