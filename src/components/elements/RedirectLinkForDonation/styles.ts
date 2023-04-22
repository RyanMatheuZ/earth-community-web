import styled from 'styled-components';

import Link from 'next/link';

import { AccountBalanceWallet } from '@mui/icons-material';

export const WalletIcon = styled(AccountBalanceWallet)`
  fill: ${({ theme }) => theme.palette.common.white};
  width: 15px;
  height: 15px;
`;

export const LinkContainer = styled(Link)`
  color: ${({ theme }) => theme.palette.common.white};
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-radius: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(1.35, 2.35)};
  width: inherit;

  &:hover {
    background-color: ${({ theme }) => theme.palette.secondary.main};
  }
`;
