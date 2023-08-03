import styled from 'styled-components';

import { Skeleton } from '@mui/material';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const TextSkeleton = styled(Skeleton).attrs({
  variant: 'text'
})`
  width: 100px;
  height: 45px;
`;
