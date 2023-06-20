import styled from 'styled-components';

import { TextField } from '@mui/material';

import type { ITheme } from '@ts/interfaces';

import { resolveTheme, resolveErrorTheme } from '@utils/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledSelectTextField = styled(TextField) <ITheme>`
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

  .MuiSelect-select {
    color: ${({ $themeColor }) => resolveTheme({ $themeColor })};
    font-size: 1.15rem;
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(1)};

    svg {
      fill: ${({ theme }) => theme.palette.primary.main};
    }
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
