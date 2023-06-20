import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.lightGray.main};
  min-height: 100vh;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(3)};
  max-width: 1800px;
  width: 100%;
`;
