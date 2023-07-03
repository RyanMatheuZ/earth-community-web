import { createGlobalStyle, css } from 'styled-components';

import { scrollbarBaseStyles } from '@styles/constants/scrollbar';

export default createGlobalStyle(
  ({ theme }) => css`
    * {
      font-family: 'Montserrat', sans-serif;
      box-sizing: border-box;
    }

    html,
    body {
      font-size: 14px;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased !important;
      scroll-behavior: smooth;
      margin: 0;
      padding: 0;
      ${scrollbarBaseStyles}

      @media ${({ theme }) => theme.breakpoints.down('desktop')} {
        font-size: 12px;
      }
    }

    h1 {
      font-size: 2rem;
      font-weight: 600;
    }
    h2 {
      font-size: 1.5rem;
      font-weight: 500;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0;
    }

    ul,
    ol {
      list-style-type: none;
    }

    a {
      text-decoration: none;

      &:visited {
        color: ${theme.palette.common.white};
      }
    }

    abbr {
      text-decoration: none;
    }

    figure {
      margin: 0;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    input[type=number] {
      -moz-appearance: textfield;
    }
  `
);
