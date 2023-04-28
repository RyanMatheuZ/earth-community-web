import styled from 'styled-components';

import { MaxWidthContainer } from '@components/elements';

export const Container = styled(MaxWidthContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: ${({ theme }) => theme.spacing(2)};

  @media ${({ theme }) => theme.breakpoints.down('laptop')} {
    display: none;
  }
`;

export const ElementsOnTheRight = styled.div`
  display: flex;
  align-items: center;
`;