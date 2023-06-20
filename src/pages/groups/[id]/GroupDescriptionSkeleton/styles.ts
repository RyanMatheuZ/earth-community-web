import styled from 'styled-components';

import { Skeleton } from '@mui/material';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing(1)};
  margin-inline: auto;
  max-width: 800px;
  width: 100%;
`;

export const Text = styled(Skeleton).attrs({
  variant: 'text'
})`
  margin-right: ${({ theme }) => theme.spacing(1)};
  height: 30px;
`;
