import { createTheme, Theme } from '@mui/material/styles';

import { colors } from '../colors';
import { sizes, down, up, between } from '../breakpoints';

const { primary, secondary, white } = colors;
const { mobile, tablet, laptop, desktop } = sizes;

export const materialUiTheme = createTheme({
  palette: {
    primary: {
      main: primary
    },
    secondary: {
      main: secondary
    },
    common: {
      white
    }
  },
  typography: {
    fontFamily: 'Poppins',
  },
  breakpoints: {
    down,
    up,
    between,
    values: {
      mobile,
      tablet,
      laptop,
      desktop
    }
  }
});

export const styledComponentsTheme: Theme = {
  ...materialUiTheme,
  palette: {
    ...materialUiTheme.palette
  },
  breakpoints: {
    ...materialUiTheme.breakpoints
  }
};
