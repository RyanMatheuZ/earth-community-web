import styled from 'styled-components';

const MaxWidthContainer = styled.div`
  margin: 0 auto;
  max-width: 900px;
  width: 100%;

  @media ${({ theme }) => theme.breakpoints.down('laptop')} {
    max-width: 450px;
    padding-inline: ${({ theme }) => theme.spacing(2)};
  }
`;

export default MaxWidthContainer;
