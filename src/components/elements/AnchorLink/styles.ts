import styled, { keyframes } from 'styled-components';

import Link from 'next/link';

import { Typography } from '@mui/material';
import { KeyboardDoubleArrowDown } from '@mui/icons-material';

const jump = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
`;

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  animation: ${jump} 1s infinite alternate;
`;

export const ArrowIcon = styled(KeyboardDoubleArrowDown)`
  fill: ${({ theme }) => theme.palette.tertiary.main};
  opacity: .7;
  width: 40px;
  height: 40px;
`;

export const Message = styled(Typography)`
  color: ${({ theme }) => theme.palette.tertiary.main};
  opacity: .7;
  font-weight: 600;
`;
