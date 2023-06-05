import styled from 'styled-components';

import { DateField as MUIDateField } from '@mui/x-date-pickers/DateField';

import type { ITheme } from '@ts/interfaces';

import { resolveErrorTheme, resolveTheme } from '@utils/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const DateField = styled(MUIDateField) <ITheme>`
  margin-top: ${({ theme }) => theme.spacing(1)};

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
