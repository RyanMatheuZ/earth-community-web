import styled from 'styled-components';

import { DialogActions, Button } from '@mui/material';
import { Send } from '@mui/icons-material';

export const Container = styled(DialogActions)`
  display: flex;
  align-items: start;
  justify-content: center;
  width: 100%;
`;

export const SendCommentButton = styled(Button)`
  &.MuiButtonBase-root.Mui-disabled {
    opacity: .5;
  }
`;

export const SendIcon = styled(Send)`
  fill: ${({ theme }) => theme.palette.primary.main};
  width: 25px;
  height: 25px;
`;
