import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle(
  () => css`
    * {
      font-family: 'Montserrat';
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
    }

    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.5rem;
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
