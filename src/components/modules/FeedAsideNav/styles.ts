import styled, { css } from 'styled-components';

import Link from 'next/link';

import { Groups2, AccountBalanceWallet, Newspaper } from '@mui/icons-material';

const iconBaseStyles = css`
  fill: ${({ theme }) => theme.palette.common.white};
  width: 20px;
  height: 20px;
`;

export const Container = styled.aside`
  background-color: ${({ theme }) => theme.palette.common.white};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius: 5px;
  margin: ${({ theme }) => theme.spacing(1, 0, 1, 1)};
  padding: ${({ theme }) => theme.spacing(2)};
  max-width: 300px;
  width: 100%;
  height: 100%;
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.palette.common.white};
  background-color: ${({ theme }) => theme.palette.primary.main};
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

export const GroupIcon = styled(Groups2)`
  ${iconBaseStyles}
`;

export const DonateIcon = styled(AccountBalanceWallet)`
  ${iconBaseStyles}
`;

export const BlogIcon = styled(Newspaper)`
  ${iconBaseStyles}
`;
