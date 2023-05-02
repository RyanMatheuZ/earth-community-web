import styled from 'styled-components';

import { Button } from '@mui/material';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const AuthButton = styled(Button)`
  color: ${({ theme }) => theme.palette.common.black};
  background-color: ${({ theme }) => theme.palette.common.white};
  text-transform: none;
  font-weight: 500;
  border: 1px solid #E6E6E6;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(1, 2)};
  width: 100%;
  transition: all 500ms ease;

  &:hover {
    background-color: ${({ theme }) => theme.palette.common.white};
    filter: brightness(.9);
  }
`;
