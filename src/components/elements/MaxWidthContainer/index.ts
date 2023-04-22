import styled from 'styled-components';

const MaxWidthContainer = styled.div`
  margin: 0 auto;
  max-width: 58vw;
  width: 100%;

  @media ${({ theme }) => theme.breakpoints.down('laptop')} {
    max-width: 90vw;
  }
`;

export default MaxWidthContainer;
