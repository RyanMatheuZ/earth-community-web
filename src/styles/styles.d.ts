import type { Theme, Palette, PaletteColor, Breakpoints } from '@mui/material/styles';

declare module 'styled-components' {
  interface DefaultTheme extends Theme {
    palette: Palette & {
      tertiary: PaletteColor;
      lightGray: PaletteColor;
    };
    breakpoints: Breakpoints;
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
    lightGray: Palette['primary'];
  }

  interface PaletteOptions {
    tertiary: PaletteOptions['primary'];
    lightGray: PaletteOptions['primary'];
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
