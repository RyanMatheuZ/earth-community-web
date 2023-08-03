import styled from 'styled-components';

import { Button } from '@mui/material';
import { AccountBalanceWallet } from '@mui/icons-material';

export const MyDonationsIcon = styled(AccountBalanceWallet)`
  fill: ${({ theme }) => theme.palette.primary.main};
  width: 30px;
  height: 30px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)};

  @media ${({ theme }) => theme.breakpoints.down('laptop')} {
    flex-direction: column;
    align-items: center;
  }
`;

export const DonationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  width: 100%;
`;

export const DonationInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
`;

export const TotalDonationsContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  margin-left: ${({ theme }) => theme.spacing(16)};

  @media ${({ theme }) => theme.breakpoints.down('laptop')} {
    text-align: center;
    margin-left: 0;
  }
`;

export const MonetaryValue = styled.span`
  font-size: 2.5rem;
  font-weight: 500;
`;

export const MonetarySymbol = styled.span`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 2rem;
  font-weight: 500;
`;

export const Observation = styled.span`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: .85rem;
`;

export const SeeMoreDonationsButton = styled(Button)`
  color: ${({ theme }) => theme.palette.common.white};
  background-color: ${({ theme }) => theme.palette.primary.main};
  font-weight: 600;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
    filter: brightness(.9);
  }
`;
