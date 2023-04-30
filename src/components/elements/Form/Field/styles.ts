import styled from 'styled-components';

import { TextField } from '@mui/material';
import { Error } from '@mui/icons-material';

import type { ITheme } from '@ts/interfaces';

import { resolveTheme, resolveErrorTheme } from '@utils/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTextField = styled(TextField) <ITheme>`
  input {
    color: ${({ $themeColor }) => resolveTheme({ $themeColor })};
    font-size: 1.15rem;
    padding: ${({ theme }) => theme.spacing(2)};
  }

  label,
  label.Mui-focused {
    color: ${({ $themeColor }) => resolveTheme({ $themeColor })};
    font-weight: 500;
  }
  label.Mui-error {
    color: ${({ $themeColor }) => resolveErrorTheme({ $themeColor })};
  }

  .MuiOutlinedInput-root {
    &.Mui-error fieldset,
    &.Mui-error.Mui-focused fieldset {
      border-color: ${({ $themeColor }) => resolveErrorTheme({ $themeColor })};
    }

    fieldset,
    &.Mui-focused fieldset {
      border-width: 2px;
      border-color: ${({ $themeColor }) => resolveTheme({ $themeColor })};
    }
  }
`;

export const ErrorIcon = styled(Error) <ITheme>`
  fill: ${({ $themeColor }) => resolveErrorTheme({ $themeColor })};
  width: 13px;
  height: 13px;
`;

export const ErrorMessage = styled.span<ITheme>`
  color: ${({ $themeColor }) => resolveErrorTheme({ $themeColor })};
  font-size: .85rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(.5)};
  margin: ${({ theme }) => theme.spacing(.25, 0, .5, 1)};
`;
