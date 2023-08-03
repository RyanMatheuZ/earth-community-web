import styled from 'styled-components';

export const Container = styled.div`
  background: url('/backgrounds/icons-green.png') center center / cover;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(2)};
  min-height: 100vh;
  height: 100%;
`;
