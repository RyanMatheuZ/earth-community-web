import styled from 'styled-components';

import { Skeleton } from '@mui/material';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QRCode = styled(Skeleton).attrs({
  variant: 'rectangular'
})`
  border-radius: 15px;
  width: 200px;
  height: 200px;
`;

export const QRCodeDescription = styled(Skeleton).attrs({
  variant: 'text'
})`
  margin-block: ${({ theme }) => theme.spacing(1, 2)};
  width: 250px;
  height: 30px;
`;

export const QRCodeInput = styled(Skeleton).attrs({
  variant: 'rectangular'
})`
  border-radius: 4px;
  width: 295px;
  height: 55px;
`;
