import styled from 'styled-components';

import { ChevronLeft } from '@mui/icons-material';

const BackIcon = styled(ChevronLeft)`
  fill: ${({ theme }) => theme.palette.primary.main};
  width: 30px;
  height: 30px;
`;

export default BackIcon;
