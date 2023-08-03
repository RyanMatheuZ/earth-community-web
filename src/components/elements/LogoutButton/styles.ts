import styled from 'styled-components';

import { Button } from '@mui/material';
import { Logout } from '@mui/icons-material';

export const Container = styled(Button)`
  color: ${({ theme }) => theme.palette.primary.main};
  background-color: ${({ theme }) => theme.palette.common.white};
  border-top: 1px solid ${({ theme }) => theme.palette.secondary.main};
  border-right: 1px solid ${({ theme }) => theme.palette.secondary.main};
  border-bottom: 1px solid ${({ theme }) => theme.palette.secondary.main};
  border-left: 5px solid ${({ theme }) => theme.palette.secondary.main};
  border-radius: 5px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(1.5, 2)};
  transition: all 275ms cubic-bezier(.17,.15,.83,.86); // https://cubic-bezier.com/#.17,.15,.83,.86

  &:hover {
    filter: brightness(.9);
  }
`;

export const LogoutIcon = styled(Logout)`
  fill: ${({ theme }) => theme.palette.primary.main};
  width: 20px;
  height: 20px;
`;
