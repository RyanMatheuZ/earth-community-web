import styled from 'styled-components';

import Image from 'next/image';

import { Typography } from '@mui/material';

export const Container = styled.section`
  background-color: ${({ theme }) => theme.palette.common.white};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 10px;
  position: relative;
`;

export const GroupBackgroundProfile = styled(Image)`
  background: linear-gradient(90deg, rgba(255,222,89,1) 0%, rgba(255,145,77,1) 100%);
  border-radius: 10px 10px 0 0;
  object-fit: cover;
  object-position: center;
  position: static !important;
  height: 200px !important;

  @media ${({ theme }) => theme.breakpoints.down('tablet')} {
    object-fit: contain;
  }
`;

export const GroupImageProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translateY(-40%);
`;

export const UserName = styled(Typography).attrs({ variant: 'h1' })`
  color: ${({ theme }) => theme.palette.tertiary.main};
  font-size: 2rem;
  font-weight: 600;
  margin-top: ${({ theme }) => theme.spacing(1)};
`;

export const Description = styled(Typography)`
  text-align: center;
  line-height: 2;
  white-space: pre-line;
  margin-top: ${({ theme }) => theme.spacing(1)};
  margin-inline: auto;
  max-width: 800px;
  width: 100%;
  transform: translateY(-50px);
`;
