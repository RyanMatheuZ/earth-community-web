import styled from 'styled-components';

import { IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';

export const Container = styled.header`
  background-color: ${({ theme }) => theme.palette.common.white};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const MaxWidthContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-inline: auto;
  max-width: 1200px;
  width: 100%;
`;

export const SearchBarContainer = styled.div`
  @media ${({ theme }) => theme.breakpoints.down('laptop')} {
    display: none;
  }
`;

export const GroupElements = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const IconContainer = styled(IconButton)`
  @media ${({ theme }) => theme.breakpoints.up('laptop')} {
    display: none;
  }
`;

export const MenuIcon = styled(Menu)`
  fill: ${({ theme }) => theme.palette.primary.main};
  width: 30px;
  height: 30px;
`;
