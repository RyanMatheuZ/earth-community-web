import styled from 'styled-components';

import Link from 'next/link';

import { Typography } from '@mui/material';
import { Visibility } from '@mui/icons-material';

interface DonationStatusColor {
  donationStatusColor: string;
}

export const Container = styled(Link)`
  background-color: ${({ theme }) => theme.palette.common.white};
  box-shadow: rgba(99, 99, 99, .2) 0px 2px 8px 0px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(2)};
  max-width: 600px;
  width: 100%;
  position: relative;
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
  gap: ${({ theme }) => theme.spacing(.5)};
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

export const ViewContainer = styled.div<DonationStatusColor>`
  background-color: ${({ theme }) => theme.palette.common.white};
  border: 1px solid ${({ donationStatusColor }) => donationStatusColor};
  border-radius: 50%;
  padding: ${({ theme }) => theme.spacing(.5)};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -10px;
  right: -10px;

  @media ${({ theme }) => theme.breakpoints.down('laptop')} {
    top: -5px;
    right: -5px;
  }
`;

export const ViewIcon = styled(Visibility) <DonationStatusColor>`
  fill: ${({ donationStatusColor }) => donationStatusColor};
  width: 15px;
  height: 15px;
`;
