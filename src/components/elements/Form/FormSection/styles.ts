import styled from 'styled-components';

import type { ITheme } from '@ts/interfaces';

import { resolveTheme } from '@utils/theme';

export const Container = styled.section<ITheme>`
  background-color: ${({ $themeColor }) => resolveTheme({ $themeColor })};
  border-radius: 15px;
  margin-top: ${({ theme }) => theme.spacing(3)};
  margin-inline: auto;
  padding: ${({ theme }) => theme.spacing(3)};
  max-width: 700px;
  width: 100%;

  @media ${({ theme }) => theme.breakpoints.down('mobile')} {
    padding: ${({ theme }) => theme.spacing(1.5)};
  }
`;
