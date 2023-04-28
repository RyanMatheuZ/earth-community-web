import styled from 'styled-components';

import { Button } from '@mui/material';
import { Send } from '@mui/icons-material';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const SendIcon = styled(Send)`
  width: 15px;
  height: 15px;
`;

export const StyledButton = styled(Button)`
  color: ${({ theme }) => theme.palette.common.white};
  font-weight: 600;
  border-radius: 20px;
  gap: ${({ theme }) => theme.spacing(1)};
  margin-top: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(1, 4)};

  &.MuiButtonBase-root.Mui-disabled {
    color: ${({ theme }) => theme.palette.common.white};
    background-color: ${({ theme }) => theme.palette.primary.main};
    opacity: 0.5;
  }
`;
