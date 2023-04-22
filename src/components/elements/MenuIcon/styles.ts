import styled from 'styled-components';

import { Apps } from '@mui/icons-material';

const MenuIcon = styled(Apps)`
  fill: ${({ theme }) => theme.palette.primary.main};
  width: 30px;
  height: 30px;
`;

export default MenuIcon;
