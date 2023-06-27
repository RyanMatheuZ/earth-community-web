import styled from 'styled-components';

import { Button } from '@mui/material';

import type { ITheme } from '@ts/interfaces';

import { resolveContrastTheme } from '@utils/theme';

export const Container = styled(Button) <ITheme>`
  background-color: ${({ $themeColor }) => resolveContrastTheme({ $themeColor })};
  box-shadow: rgba(100, 100, 111, .2) 0px 7px 29px 0px;
  border-radius: 50%;
  padding: ${({ theme }) => theme.spacing(.5)};
  width: 60px;
  height: 60px;
  position: absolute;
  top: -10px;
  left: -10px;
  transition: all 500ms ease;

  &:hover {
    background-color: ${({ $themeColor }) => resolveContrastTheme({ $themeColor })};
    filter: brightness(.9);
  }
`;
