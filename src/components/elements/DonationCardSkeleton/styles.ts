import styled from 'styled-components';

import { Skeleton } from '@mui/material';

export const Container = styled(Skeleton).attrs({
  variant: 'rectangular'
})`
  box-shadow: rgba(99, 99, 99, .2) 0px 2px 8px 0px;
  border-radius: 10px;
  max-width: 600px;
  width: 100%;
  height: 130px;
`;
