import styled from 'styled-components';

import Link from 'next/link';

import type { ITheme } from '@ts/interfaces';

import { resolveTheme } from '@utils/theme';

export const Container = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing(3)};
`;

export const Text = styled.span<ITheme>`
  color: ${({ $themeColor, theme }) =>
    $themeColor === 'white' ? theme.palette.common.white : theme.palette.common.black
};
`;

export const StyledLink = styled(Link) <ITheme>`
  color: ${({ $themeColor, }) => resolveTheme({ $themeColor })};
  font-weight: 600;

  &:visited {
    color: ${({ $themeColor }) => resolveTheme({ $themeColor })};
  }
`;
