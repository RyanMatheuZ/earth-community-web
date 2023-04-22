import Link from 'next/link';

import styled, { css } from 'styled-components';

import { Spa, Close, LockOpen, HowToReg } from '@mui/icons-material';

import { SpeedDial, SpeedDialAction } from '@mui/material';

export const baseWhiteIconStyles = css`
  fill: ${({ theme }) => theme.palette.common.white};
  width: 25px;
  height: 25px;
`;

export const baseGreenIconStyles = css`
  fill: ${({ theme }) => theme.palette.primary.main};
  width: 30px;
  height: 30px;
`;

export const SpaIcon = styled(Spa)`
  ${baseWhiteIconStyles}
`;

export const CloseIcon = styled(Close)`
  ${baseWhiteIconStyles}
`;

export const SignInIcon = styled(LockOpen)`
  fill: ${({ theme }) => theme.palette.primary.main};
  ${baseGreenIconStyles}
`;

export const SignUpIcon = styled(HowToReg)`
  fill: ${({ theme }) => theme.palette.primary.main};
  ${baseGreenIconStyles}
`;

export const StyledSpeedDial = styled(SpeedDial)`
  width: fit-content;

  & span.MuiSpeedDialAction-staticTooltipLabel {
    color: ${({ theme }) => theme.palette.common.white};
    background-color: ${({ theme }) => theme.palette.primary.main};
    font-weight: 600;
    width: max-content;
  }
`;

export const StyledSpeedDialAction = styled(SpeedDialAction)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
