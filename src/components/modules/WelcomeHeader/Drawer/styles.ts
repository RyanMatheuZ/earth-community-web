import styled from 'styled-components';

import { List, ListItem, Button } from '@mui/material';
import { Close } from '@mui/icons-material';

import { MaxWidthContainer } from '@components/elements';

export const Container = styled(MaxWidthContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: ${({ theme }) => theme.spacing(2)};

  @media ${({ theme }) => theme.breakpoints.up('laptop')} {
    display: none;
  }
`;

export const StyledList = styled(List)`
  box-sizing: content-box;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-top: 0;
  width: 70vw;
  height: 100%;
`;

export const StyledListItem = styled(ListItem)`
  color: ${({ theme }) => theme.palette.primary.main};
  background-color: ${({ theme }) => theme.palette.common.white};
  font-weight: 600;
  border-left: 5px solid ${({ theme }) => theme.palette.primary.main};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  gap: ${({ theme }) => theme.spacing(1)};
  transition: all 275ms cubic-bezier(.17,.15,.83,.86); // https://cubic-bezier.com/#.17,.15,.83,.86

  svg {
    fill: ${({ theme }) => theme.palette.primary.main};
  }

  &:hover {
    color: ${({ theme }) => theme.palette.common.white};
    background-color: ${({ theme }) => theme.palette.secondary.main};
    border-left: 8px solid ${({ theme }) => theme.palette.primary.main};

    svg {
      fill: ${({ theme }) => theme.palette.common.white};
    }
  }
`;

export const LinkContainer = styled.div`
  padding: ${({ theme }) => theme.spacing(1)};
`;

export const ButtonContainer = styled(ListItem)`
  display:flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const CloseIcon = styled(Close)`
  fill: ${({ theme }) => theme.palette.primary.main};
`;

export const CloseDrawerButton = styled(Button)`
  color: ${({ theme }) => theme.palette.primary.main};
  background-color: ${({ theme }) => theme.palette.common.white};
  font-weight: 600;
  border: 2px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 20px;
  padding-block: ${({ theme }) => theme.spacing(1)};
  gap: ${({ theme }) => theme.spacing(1)};
  width: 100%;

  &:hover {
    color: ${({ theme }) => theme.palette.secondary.main};
    border: 2px solid ${({ theme }) => theme.palette.secondary.main};

    svg {
      fill: ${({ theme }) => theme.palette.secondary.main};
    }
  }
`;
