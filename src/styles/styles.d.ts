import type { Theme, Palette, PaletteColor, Breakpoints } from '@mui/material/styles';

declare module 'styled-components' {
  interface DefaultTheme extends Theme {
    palette: Palette & {
      tertiary: PaletteColor;
    };
    breakpoints: Breakpoints;
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
  }

  interface PaletteOptions {
    tertiary: PaletteOptions['primary'];
  }

  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}
