import styled from 'styled-components';

import { Divider } from '@mui/material';

import type { ITheme } from '@ts/interfaces';

import { resolveTheme } from '@utils/theme';

export const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 1fr;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-block: ${({ theme }) => theme.spacing(2)};
`;

export const StyledDivider = styled(Divider) <ITheme>`
  border-top: 1px solid ${({ $themeColor }) => resolveTheme({ $themeColor })};
  width: 100%;
`;

export const Text = styled.span<ITheme>`
  color: ${({ $themeColor }) => resolveTheme({ $themeColor })};
  font-weight: 500;
  text-align: center;
`;

