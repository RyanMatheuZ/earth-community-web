import styled from 'styled-components';

export const Container = styled.header`
  background-color: ${({ theme }) => theme.palette.common.white};
  border-radius: 50px;
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
