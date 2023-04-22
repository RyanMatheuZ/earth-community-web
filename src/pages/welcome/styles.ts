import styled from 'styled-components';

import { Typography } from '@mui/material';

import { MaxWidthContainer } from '@components/elements';

export const Container = styled.div`
  background: url('/backgrounds/dashed.svg') center center / cover;
  height: 100vh;
`;

export const Content = styled(MaxWidthContainer)`
  margin-top: ${({ theme }) => theme.spacing(8)};
`;

export const PhraseContainer = styled.p`
  font-size: 3.5rem;
  font-weight: 500;
  margin: 0;

  @media ${({ theme }) => theme.breakpoints.down('desktop')} {
    text-align: center;
  }
`;

export const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media ${({ theme }) => theme.breakpoints.down('desktop')} {
    flex-direction: column;
    row-gap: ${({ theme }) => theme.spacing(5)};
  }
`;

export const HighlightedText = styled.span`
  color: ${({ theme }) => theme.palette.primary.main};
  text-transform: uppercase;
  font-weight: 700;
`;

export const UnderlinedText = styled.span`
  text-decoration: solid underline ${({ theme }) => theme.palette.primary.main} 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: start;
  margin-top: ${({ theme }) => theme.spacing(4)};
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const TextButtonContainer = styled(Typography)`
  font-weight: 600;
  margin-top: ${({ theme }) => theme.spacing(2)};
  margin-left: ${({ theme }) => theme.spacing(1)};
`;
