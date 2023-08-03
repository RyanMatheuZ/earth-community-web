import styled from 'styled-components';

import { Menu, MenuItem } from '@mui/material';
import { Person, Logout, KeyboardArrowRight } from '@mui/icons-material';

import { baseIconStyles } from '@styles/constants/baseIconStyles';

export const StyledMenu = styled(Menu)`
  margin-left: ${({ theme }) => theme.spacing(2.5)};

  & div.MuiPaper-root.MuiMenu-paper {
    box-shadow: rgba(0, 0, 0, .02) 0px 1px 3px 0px, rgba(27, 31, 35, .15) 0px 0px 0px 1px;
    max-width: 300px;
    width: 100%;
    left: auto !important;
    top: 75px !important;
    right: 10px;
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

export const MenuContent = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const ViewProfileIcon = styled(Person)`
  ${baseIconStyles}
`;

export const LogoutIcon = styled(Logout)`
  ${baseIconStyles}
`;

export const ArrowIcon = styled(KeyboardArrowRight)`
  ${baseIconStyles}
`;
