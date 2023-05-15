import styled from 'styled-components';

import { Button } from '@mui/material';
import { Send } from '@mui/icons-material';

import type { ITheme } from '@ts/interfaces';

import { resolveTheme, resolveContrastTheme } from '@utils/theme';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const SendIcon = styled(Send) <ITheme>`
  fill: ${({ $themeColor }) => resolveContrastTheme({ $themeColor })};
  width: 15px;
  height: 15px;
`;

export const StyledButton = styled(Button) <ITheme>`
  background-color: ${({ $themeColor }) => resolveTheme({ $themeColor })};
  color: ${({ $themeColor }) => resolveContrastTheme({ $themeColor })};
  font-weight: 600;
  border-radius: 20px;
  gap: ${({ theme }) => theme.spacing(1)};
  margin-top: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(1, 4)};

  &:hover {
    background-color: ${({ $themeColor }) => resolveTheme({ $themeColor })};
    color: ${({ $themeColor }) => resolveContrastTheme({ $themeColor })};
    filter: brightness(.85)
  }

  &.MuiButtonBase-root.Mui-disabled {
    color: ${({ $themeColor }) => resolveContrastTheme({ $themeColor })};
    background-color: ${({ $themeColor }) => resolveTheme({ $themeColor })};
    opacity: .5;
  }
`;
