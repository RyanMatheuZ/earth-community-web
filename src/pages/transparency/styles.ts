import styled from 'styled-components';

import { Typography } from '@mui/material';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.lightGray.main};
  padding: ${({ theme }) => theme.spacing(2)};
  min-height: 100vh;
  height: 100%;
`;

export const Title = styled(Typography).attrs({
  variant: 'h1'
})`
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
  margin-block: ${({ theme }) => theme.spacing(6)};
`;

export const Description = styled(Typography)`
  font-size: 1.2rem;
  line-height: 1.75;
  text-align: center;
  margin-inline: auto;
  max-width: 800px;
  width: 100%;
`;

export const TotalDonationsContainer = styled.div`
  margin-block: ${({ theme }) => theme.spacing(4)};
`;

export const MonetaryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MonetaryValue = styled.span`
  font-size: 2.5rem;
  font-weight: 500;
`;

export const MonetarySymbol = styled.span`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 2rem;
  font-weight: 500;
  margin-right: ${({ theme }) => theme.spacing(1)};
`;

export const Observation = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  text-align: center;
  font-size: .85rem;
  font-weight: 500;
`;

export const UnderlinedText = styled.span`
  text-decoration: wavy underline ${({ theme }) => theme.palette.primary.main} 2.5px;
`;

export const UppercaseText = styled.span`
  color: ${({ theme }) => theme.palette.primary.main};
  text-transform: uppercase;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;
