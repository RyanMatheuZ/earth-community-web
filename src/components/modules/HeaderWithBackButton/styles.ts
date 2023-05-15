import styled from 'styled-components';

import type { ITheme } from '@ts/interfaces';

import { resolveTheme } from '@utils/theme';

export const Container = styled.header<ITheme>`
  background-color: ${({ $themeColor }) => resolveTheme({ $themeColor })};
  border-radius: 50px;
  box-shadow: rgba(50, 50, 93, .25) 0px 2px 5px -1px, rgba(0, 0, 0, .3) 0px 1px 3px -1px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  padding: ${({ theme }) => theme.spacing(1.5, 3)};
  height: fit-content;

  & button {
    justify-self: start;
  }

  & figure {
    justify-self: center;
  }
`;
