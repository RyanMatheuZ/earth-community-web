import { Skeleton } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const StatusSkeleton = styled(Skeleton).attrs({
  variant: 'rectangular'
})`
  border-radius: 5px;
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  width: 80px;
  height: 35px;
`;

export const LabelsSkeleton = styled(Skeleton).attrs({
  variant: 'text'
})`
  width: 160px;
  height: 20px;
`;
