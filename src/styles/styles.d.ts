import type { Palette } from '@ts/interfaces/palette';

declare module 'styled-components' {
  interface DefaultTheme {
    palette: Palette;
  }
}
