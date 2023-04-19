import { ThemeProvider as MaterialUiProvider } from '@mui/material';

import { ThemeProvider as StyledComponentsProvider } from 'styled-components';

import { materialUiTheme, styledComponentsTheme } from '@styles/theme';
import Global from '@styles/global';

const ThemeProviders = (node: JSX.Element) => {
  return (
    <StyledComponentsProvider theme={styledComponentsTheme}>
      <MaterialUiProvider theme={materialUiTheme}>
        <Global />
        {node}
      </MaterialUiProvider>
    </StyledComponentsProvider>
  );
};

export default ThemeProviders;
