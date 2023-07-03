import styled from 'styled-components';

import { Dialog, Button, DialogContent, DialogTitle, DialogActions } from '@mui/material';
import { Close } from '@mui/icons-material';

import { scrollbarBaseStyles } from '@styles/constants/scrollbar';

interface ContainerProps {
  width: number;
  height: number;
}

export const Container = styled(Dialog) <ContainerProps>`
  margin: 0 auto;

  & .MuiPaper-root {
    max-width: ${({ width }) => width}px;
    max-height: ${({ height }) => height}px;
    width: 100%;
    height: 100%;
    overflow-y: inherit;
    position: relative;

    @media ${({ theme }) => theme.breakpoints.down('laptop')} {
      margin: 0;
    }
  }
`;

export const StyledHeader = styled(DialogTitle)`
  color: ${({ theme }) => theme.palette.tertiary.main};
  text-align: center;
  font-weight: 600;
`;

export const StyledDialogContent = styled(DialogContent)`
  ${scrollbarBaseStyles}
`;

export const StyledActions = styled(DialogActions)`
  display: flex;
  align-items: start;
  padding: ${({ theme }) => theme.spacing(2, 3)};
`;

export const CloseModalButton = styled(Button)`
  background-color: ${({ theme }) => theme.palette.error.main};
  box-shadow: rgba(0, 0, 0, .1) 0px 4px 12px;
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
