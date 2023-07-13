import { type FC, type ReactElement, type PropsWithChildren } from 'react';

import { render, RenderOptions } from '@testing-library/react';

import { QueryClientProvider } from '@tanstack/react-query';

import { ThemeProvider as StyledThemeProvider, type DefaultTheme } from 'styled-components';

import { ThemeProvider as MuiThemeProvider } from '@mui/material';

import { ToastContainer } from 'react-toastify';

import AuthProviver from '@context/auth';

import { queryClient } from '@services/tanstackQuery';

import { materialUiTheme, styledComponentsTheme } from '@styles/theme';
import Global from '@styles/global';

const AllTheProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <StyledThemeProvider theme={styledComponentsTheme as DefaultTheme}>
        <MuiThemeProvider theme={materialUiTheme}>
          <ToastContainer />
          <Global />
          <AuthProviver>
            {children}
          </AuthProviver>
        </MuiThemeProvider>
      </StyledThemeProvider>
    </QueryClientProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => {
  return (
    render(ui, { wrapper: AllTheProviders, ...options })
  );
};

export * from '@testing-library/react';
export { customRender as render };
