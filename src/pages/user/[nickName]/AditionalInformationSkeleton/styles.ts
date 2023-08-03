import styled from 'styled-components';

import { Skeleton } from '@mui/material';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  margin-top: ${({ theme }) => theme.spacing(1)};
`;

export const IconSkeleton = styled(Skeleton).attrs({
  variant: 'rectangular'
})`
  border-radius: 5px;
  width: 20px;
  height: 20px;
`;

export const TextSkeleton = styled(Skeleton).attrs({
  variant: 'text'
})`
  width: 100px;
  height: 25px;
`;
