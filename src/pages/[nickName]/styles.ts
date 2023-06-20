import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.lightGray.main};
  display: flex;
  flex-direction: column;
`;
