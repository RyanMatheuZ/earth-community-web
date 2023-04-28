import styled from 'styled-components';

import Link from 'next/link';

export const Container = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing(3)};
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: 600;

  &:visited {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;
