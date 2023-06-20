import { createTheme, Theme } from '@mui/material/styles';

import { colors } from '../colors';
import { sizes, down, up, between } from '../breakpoints';

const { primary, secondary, tertiary, ligthGray } = colors;
const { mobile, tablet, laptop, desktop } = sizes;

export const materialUiTheme = createTheme({
  palette: {
    primary: {
      main: primary
    },
    secondary: {
      main: secondary
    },
    tertiary: {
      main: tertiary
    },
    lightGray: {
      main: ligthGray
    }
  },
  typography: {
    fontFamily: 'Montserrat',
    h1: {
      fontSize: '2rem',
      fontWeight: 600
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 500
    }
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
