import styled from 'styled-components';

import { Typography } from '@mui/material';

import type { ITheme } from '@ts/interfaces';

import { resolveTheme } from '@utils/theme';

export const Container = styled.figure`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  width: fit-content;
`;

export const Title = styled(Typography).attrs({
  variant: 'h1'
}) <ITheme>`
  color: ${({ $themeColor }) => resolveTheme({ $themeColor })};
`;
