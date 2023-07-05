import styled from 'styled-components';

import { Skeleton } from '@mui/material';

export const Container = styled.div`
  margin: ${({ theme }) => theme.spacing(4)};
`;

export const Title = styled(Skeleton).attrs({
  variant: 'text'
})`
  width: 100px;
  height: 50px;
`;

export const TextContainer = styled.div`
  display: flex;
`;

export const Text = styled(Skeleton).attrs({
  variant: 'text'
})`
  margin-right: ${({ theme }) => theme.spacing(1)};
  height: 30px;
`;
