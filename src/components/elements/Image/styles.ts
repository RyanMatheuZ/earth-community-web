import styled from 'styled-components';

import { ImageProps } from 'next/image';

interface ContainerProps {
  width: ImageProps['width'];
  height: ImageProps['height'];
}

export const Container = styled.figure <ContainerProps>`
  position: relative;
  object-fit: contain;
  height: ${({ height }) => height}px;
  max-width: ${({ width }) => width}px;
  width: 100%;
`;
