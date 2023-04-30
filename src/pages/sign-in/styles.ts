import styled from 'styled-components';

export const Container = styled.div`
  background: url('/backgrounds/icons-white.png') center center / cover;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(2)};
  height: 100vh;
`;
