import styled from 'styled-components';

import { MenuItem } from '@mui/material';
import { MoreVert, Delete } from '@mui/icons-material';

import { baseIconStyles } from '@styles/constants/baseIconStyles';

export const StyledMenuItem = styled(MenuItem)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(1)};
  min-width: 120px;
  min-height: 0;

  &:hover {
    color: ${({ theme }) => theme.palette.common.white};
    background-color: ${({ theme }) => theme.palette.primary.main};

    svg {
      fill: ${({ theme }) => theme.palette.common.white}
    }
  }
`;

export const MoreIcon = styled(MoreVert)`
  fill: ${({ theme }) => theme.palette.primary.main};
  width: 25px;
  height: 25px;
`;

export const DeleteIcon = styled(Delete)`
  ${baseIconStyles}
`;
