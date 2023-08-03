import styled from 'styled-components';

import { Skeleton } from '@mui/material';

const Container = styled(Skeleton).attrs({
  variant: 'circular'
})`
  width: 115px;
  height: 115px;
`;

export default Container;
