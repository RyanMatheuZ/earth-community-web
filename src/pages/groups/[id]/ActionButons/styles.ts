import styled, { css } from 'styled-components';

import { Button } from '@mui/material';
import { DoorFront, DoorBack, Delete } from '@mui/icons-material';

interface ActionButtonProps {
  actionBackgroundColor: string;
}

const iconBaseStyles = css`
  fill: ${({ theme }) => theme.palette.common.white};
  width: 20px;
  height: 20px;
`;

export const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
  position: absolute;
  top: -10px;
  right: -10px;
`;

export const ActionButton = styled(Button) <ActionButtonProps>`
  color: ${({ theme }) => theme.palette.common.white};
  background-color: ${({ actionBackgroundColor }) => actionBackgroundColor};
  box-shadow: rgba(100, 100, 111, .2) 0px 7px 29px 0px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)};
  transition: all 500ms ease;

  &:hover {
    background-color: ${({ actionBackgroundColor }) => actionBackgroundColor};
    filter: brightness(.9);
  }
`;

export const JoinTheGroupIcon = styled(DoorFront)`
  ${iconBaseStyles}
`;

export const LeaveTheGroupIcon = styled(DoorBack)`
  ${iconBaseStyles}
`;

export const DeleteTheIcon = styled(Delete)`
  ${iconBaseStyles}
`;
