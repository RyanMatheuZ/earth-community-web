import styled from 'styled-components';

import { Avatar } from '@mui/material';

import { type PictureProfileSizeProps } from './utils';

import { resolveTheme } from '@utils/theme';

export const PictureProfile = styled(Avatar) <PictureProfileSizeProps>`
  background-color: ${({ theme }) => theme.palette.primary.main};
  outline: 3px solid ${({ $themeColor }) => resolveTheme({ $themeColor })};
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
