import styled from 'styled-components';

import { Button } from '@mui/material';
import { KeyboardDoubleArrowUp } from '@mui/icons-material';

export const Container = styled(Button)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding: ${({ theme }) => theme.spacing(1)};
  position: fixed;
  right: 10px;
  bottom: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
    filter: brightness(.9);
  }
`;

export const ArrowIcon = styled(KeyboardDoubleArrowUp)`
  fill: ${({ theme }) => theme.palette.common.white};
  width: 35px;
  height: 35px;
`;
