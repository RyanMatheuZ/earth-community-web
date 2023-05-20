import styled from 'styled-components';

import { Avatar } from '@mui/material';

import { type PictureProfileSizeProps } from './utils';

export const PictureProfile = styled(Avatar) <PictureProfileSizeProps>`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  outline: 3px solid ${({ theme }) => theme.palette.primary.main};
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
