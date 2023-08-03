import styled from 'styled-components';

import { MenuItem, type PaperProps, type PopoverOrigin } from '@mui/material';

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

export const paperProps: PaperProps = {
  elevation: 0,
  sx: {
    overflow: 'visible',
    filter: 'drop-shadow(0px 1px 4px rgba(0, 0, 0, .16))',
    mt: 1.5,
    '& .MuiAvatar-root': {
      width: 32,
      height: 32,
      ml: -.5,
      mr: 1,
    },
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: 'background.paper',
      transform: 'translateY(-50%) rotate(45deg)',
      zIndex: 0,
    },
  },
};

export const transformOrigin: PopoverOrigin = {
  horizontal: 'right',
  vertical: 'top'
};

export const anchorOrigin: PopoverOrigin = {
  horizontal: 'right',
  vertical: 'bottom'
};
