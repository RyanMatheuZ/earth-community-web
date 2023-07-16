import styled from 'styled-components';

import { IconButton } from '@mui/material';
import { Share } from '@mui/icons-material';

export const Container = styled(IconButton)`
  border: 1px solid ${({ theme }) => theme.palette.lightGray.main};
  margin-top: ${({ theme }) => theme.spacing(1)};
`;

export const ShareIcon = styled(Share)`
  width: 20px;
  height: 20px;
`;
