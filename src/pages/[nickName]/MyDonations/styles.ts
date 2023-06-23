import styled from 'styled-components';

import { AccountBalanceWallet } from '@mui/icons-material';

export const MyDonationsIcon = styled(AccountBalanceWallet)`
  fill: ${({ theme }) => theme.palette.primary.main};
  width: 30px;
  height: 30px;
`;

export const Container = styled.div`
  width: 300px;
`;
