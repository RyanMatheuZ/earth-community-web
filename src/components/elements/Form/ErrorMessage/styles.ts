import styled from 'styled-components';

import { Error } from '@mui/icons-material';

import type { ITheme } from '@ts/interfaces';

import { resolveErrorTheme } from '@utils/theme';

export const ErrorIcon = styled(Error) <ITheme>`
  fill: ${({ $themeColor }) => resolveErrorTheme({ $themeColor })};
  width: 13px;
  height: 13px;
`;

export const Container = styled.span<ITheme>`
  color: ${({ $themeColor }) => resolveErrorTheme({ $themeColor })};
  font-size: .85rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(.5)};
  margin: ${({ theme }) => theme.spacing(.25, 0, .5, 1)};
`;
