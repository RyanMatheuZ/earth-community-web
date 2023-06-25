import styled from 'styled-components';

import { Button, Typography } from '@mui/material';
import { Warning } from '@mui/icons-material';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const WarningIcon = styled(Warning)`
  fill: ${({ theme }) => theme.palette.error.main};
  width: 80px;
  height: 80px;
`;

export const Message = styled(Typography)`
  color: ${({ theme }) => theme.palette.error.main};
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  white-space: pre-line;
  max-width: 500px;
  width: fit-content;
`;

export const ActionsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const BackButton = styled(Button)`
  color: ${({ theme }) => theme.palette.error.main};
  background-color: ${({ theme }) => theme.palette.common.white};
  border: 1px solid ${({ theme }) => theme.palette.error.main};
  width: 120px;

  &.MuiButtonBase-root.Mui-disabled {
    color: ${({ theme }) => theme.palette.error.main};
    background-color: ${({ theme }) => theme.palette.common.white};
    opacity: .5;
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.common.white};
    filter: brightness(.9);
  }
`;

export const ConfirmButton = styled(Button)`
  color: ${({ theme }) => theme.palette.common.white};
  background-color: ${({ theme }) => theme.palette.error.main};
  width: 120px;

  &.MuiButtonBase-root.Mui-disabled {
    color: ${({ theme }) => theme.palette.common.white};
    background-color: ${({ theme }) => theme.palette.error.main};
    opacity: .5;
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.error.main};
    filter: brightness(.9);
  }
`;
