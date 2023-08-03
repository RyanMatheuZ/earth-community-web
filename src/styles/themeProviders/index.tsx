import { type FC, type PropsWithChildren } from 'react';

import { ThemeProvider as MaterialUiProvider } from '@mui/material';

import { ThemeProvider as StyledComponentsProvider } from 'styled-components';

import { ToastContainer } from 'react-toastify';

import { materialUiTheme, styledComponentsTheme } from '@styles/theme';
import Global from '@styles/global';

import 'react-toastify/dist/ReactToastify.css';

const ThemeProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledComponentsProvider theme={styledComponentsTheme}>
      <MaterialUiProvider theme={materialUiTheme}>
        <ToastContainer />
        <Global />
        {children}
      </MaterialUiProvider>
    </StyledComponentsProvider>
  );
};

export default ThemeProviders;
