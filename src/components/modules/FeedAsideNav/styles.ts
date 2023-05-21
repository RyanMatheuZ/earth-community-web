import styled from 'styled-components';

export const Container = styled.aside`
  background-color: ${({ theme }) => theme.palette.common.white};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius: 5px;
  margin: ${({ theme }) => theme.spacing(1, 0, 1, 1)};
  padding: ${({ theme }) => theme.spacing(2)};
  max-width: 300px;
  width: 100%;
  height: 100%;

  @media ${({ theme }) => theme.breakpoints.down('laptop')} {
    display: none;
  }
`;
