import styled from 'styled-components';

import { Button, Typography } from '@mui/material';
import { AccountBalanceWallet } from '@mui/icons-material';

interface DonationStatusColor {
  donationStatusColor: string;
}

export const DonationsIcon = styled(AccountBalanceWallet)`
  fill: ${({ theme }) => theme.palette.primary.main};
  width: 30px;
  height: 30px;
`;

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

export const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;

  @media ${({ theme }) => theme.breakpoints.down('mobile')} {
    gap: ${({ theme }) => theme.spacing(2)};
   justify-content: center;
  }
`;

export const QRCodeDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const Status = styled(Typography) <DonationStatusColor>`
  color: ${({ theme }) => theme.palette.common.white};
  background-color: ${({ donationStatusColor }) => donationStatusColor};
  border-radius: 5px;
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(1)};
  width: fit-content;
`;

export const DateValue = styled.span`
  color: ${({ theme }) => theme.palette.tertiary.main};
`;

export const DateLabel = styled.span<DonationStatusColor>`
  color: ${({ donationStatusColor }) => donationStatusColor};
  font-weight: 500;
`;

export const BackButton = styled(Button)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-radius: 50%;
  padding: ${({ theme }) => theme.spacing(.5)};
  width: 60px;
  height: 60px;
  position: absolute;
  left: -30px;
  bottom: -30px;
  transition: all 500ms ease;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
    filter: brightness(.9);
  }
`;
