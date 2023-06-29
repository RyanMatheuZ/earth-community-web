import styled from 'styled-components';

import { Typography } from '@mui/material';

interface DonationStatusColor {
  donationStatusColor: string;
}

export const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.common.white};
  box-shadow: rgba(99, 99, 99, .2) 0px 2px 8px 0px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(2)};
  max-width: 600px;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const Description = styled(Typography) <DonationStatusColor>`
  color: ${({ donationStatusColor }) => donationStatusColor};
  font-weight: 600;
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DateValue = styled.span`
  color: ${({ theme }) => theme.palette.tertiary.main};
`;

export const DateLabel = styled.span<DonationStatusColor>`
  color: ${({ donationStatusColor }) => donationStatusColor};
  font-weight: 500;
`;

export const DonationValue = styled(Typography)`
  color: ${({ theme }) => theme.palette.tertiary.main};
  font-size: 1.5rem;
  font-weight: 500;
`;

export const DonationSymbol = styled.span <DonationStatusColor>`
  color: ${({ donationStatusColor }) => donationStatusColor};
  font-size: 1rem;
  font-weight: 500;
`;

export const Status = styled(Typography) <DonationStatusColor>`
  color: ${({ theme }) => theme.palette.common.white};
  background-color: ${({ donationStatusColor }) => donationStatusColor};
  border-radius: 5px;
  font-weight: 500;
  padding: ${({ theme }) => theme.spacing(1)};
  width: fit-content;
`;
