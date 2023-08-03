import styled from 'styled-components';

import Link from 'next/link';

import { Typography } from '@mui/material';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.lightGray.main};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(3)};
  min-height: 100vh;
  height: 100%;
`;

export const Content = styled.div`
  border-left: 5px solid ${({ theme }) => theme.palette.tertiary.main};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)};
  padding-left: ${({ theme }) => theme.spacing(1)};
`;

export const StyledMessage = styled.span`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 3.5rem;
  display: block;
`;

export const Message = styled(Typography).attrs({
  variant: 'h1'
})`
  color: ${({ theme }) => theme.palette.tertiary.main};
  font-size: 2.5rem;
  font-weight: 600;
`;

export const RedirectLink = styled(Link)`
  color: ${({ theme }) => theme.palette.common.white};
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-radius: 10px;
  font-weight: 600;
  padding: ${({ theme }) => theme.spacing(1, 2)};
  width: fit-content;
`;
