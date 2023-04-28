import styled from 'styled-components';

export const Container = styled.div`
  background: url('/backgrounds/icons.png') center center / cover;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(2)};
  height: 100vh;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 1.25rem;
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;

export const FormSection = styled.section`
  background-color: ${({ theme }) => theme.palette.common.white};
  border-radius: 15px;
  margin-top: ${({ theme }) => theme.spacing(3)};
  margin-inline: auto;
  padding: ${({ theme }) => theme.spacing(3)};
  max-width: 700px;
  width: 100%;

  @media ${({ theme }) => theme.breakpoints.down('mobile')} {
    padding: ${({ theme }) => theme.spacing(1.5)};
  }
`;
