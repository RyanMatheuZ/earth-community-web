import styled from 'styled-components';

import { Skeleton } from '@mui/material';

const Container = styled(Skeleton).attrs({
  variant: 'circular'
})`
  width: 120px;
  height: 120px;
`;

export default Container;
