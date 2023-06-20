import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.lightGray.main};
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(3)};
  max-width: 1800px;
  min-height: 100vh;
`;
