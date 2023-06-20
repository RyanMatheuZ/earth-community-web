import styled from 'styled-components';

import { Dialog, Button } from '@mui/material';
import { Close } from '@mui/icons-material';

export const Container = styled(Dialog)`
  margin: 0 auto;

  & .MuiPaper-root {
    max-width: 800px;
    min-height: 600px;
    width: 100%;
    height: 100%;
    overflow-y: inherit;
    position: relative;

    @media ${({ theme }) => theme.breakpoints.down('laptop')} {
      margin: 0;
    }
  }
`;

export const CloseModalButton = styled(Button)`
  background-color: ${({ theme }) => theme.palette.error.main};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  position: absolute;
  top: 5px;
  right: 5px;

  &:hover {
    background-color: ${({ theme }) => theme.palette.error.main};
    filter: brightness(.9);
  }
`;

export const CloseIcon = styled(Close)`
  fill: ${({ theme }) => theme.palette.common.white};
  width: 20px;
  height: 20px;
`;
