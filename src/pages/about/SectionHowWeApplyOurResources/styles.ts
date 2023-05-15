import styled from 'styled-components';

import { SectionContainer } from '../styles';

export const StyledSectionContainer = styled(SectionContainer)`
  margin-top: 0;

  @media ${({ theme }) => theme.breakpoints.down('laptop')} {
    flex-direction: column-reverse;
  }
`;

export const SlantedContainer = styled.div`
  background-color: #F1F1F1;
  margin-block: ${({ theme }) => theme.spacing(6)};
  padding: ${({ theme }) => theme.spacing(6, 2)};
  transform: skewY(-2.5deg);

  & > section {
    transform: skewY(2.5deg);
  }
`;