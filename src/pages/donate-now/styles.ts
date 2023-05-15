import styled from 'styled-components';

import { Typography } from '@mui/material';

export const Container = styled.div`
  background: url('/backgrounds/florest.png') center center / cover;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(2)};
  min-height: 100vh;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: right;
  flex: auto;
`;

export const Title = styled(Typography).attrs({
  variant: 'h1'
})`
  color: ${({ theme }) => theme.palette.common.white};
  font-size: 4rem;
  font-weight: 700;
  text-shadow: 2px 2px 50px ${({ theme }) => theme.palette.tertiary.main};
  text-transform: uppercase;
`;

export const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.common.white};
  font-size: 1.35rem;
  font-weight: 500;
  text-shadow: -2px -2px ${({ theme }) => theme.palette.tertiary.main};
`;

export const MessageSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 40%;

  @media ${({ theme }) => theme.breakpoints.down('laptop')} {
    display: none;
  }
`;

export const FormSection = styled.section`
  background-color: ${({ theme }) => theme.palette.common.white};
  border-radius: 40px 0 0 40px;
  border-right: 5px solid ${({ theme }) => theme.palette.primary.main};
  margin-top: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(2)};
  width: 60%;

  @media ${({ theme }) => theme.breakpoints.down('laptop')} {
    width: 100%;
  }
`;

export const StyledForm = styled.form`
  height: 100%;
`;

export const StepDescription = styled(Typography)`
  color: ${({ theme }) => theme.palette.tertiary.main};
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;

export const StepHighlightedText = styled.span`
  color: ${({ theme }) => theme.palette.secondary.main};
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
`;
