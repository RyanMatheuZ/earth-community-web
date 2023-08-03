import styled from 'styled-components';

import { Typography } from '@mui/material';

export const Container = styled.div`
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

export const Description = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: 600;
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(.5)};
`;

export const Value = styled.span`
  color: ${({ theme }) => theme.palette.tertiary.main};
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: 500;
`;

export const DonationValue = styled(Typography)`
  color: ${({ theme }) => theme.palette.tertiary.main};
  font-size: 1.5rem;
  font-weight: 500;
`;

export const DonationSymbol = styled.span`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 1rem;
  font-weight: 500;
`;
