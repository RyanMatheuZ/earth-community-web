import styled from 'styled-components';

import { Typography } from '@mui/material';
import { Visibility } from '@mui/icons-material';

import Image from 'next/image';
import Link from 'next/link';

export const Container = styled(Link)`
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 5px;
  position: relative;
`;

export const UserBackgroundProfile = styled(Image)`
  border-bottom: 1px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 5px 5px 0 0;
  object-fit: cover;
  object-position: center;
  position: static !important;
  height: 80px !important;
`;

export const UserPictureProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  transform: translateY(-40%);
`;

export const UserName = styled(Typography)`
  color: ${({ theme }) => theme.palette.tertiary.main};
  font-weight: 600;
`;

export const ViewContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.common.white};
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 50%;
  padding: ${({ theme }) => theme.spacing(.5)};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -10px;
  right: -10px;

  @media ${({ theme }) => theme.breakpoints.down('laptop')} {
    top: -5px;
    right: -5px;
  }
`;

export const ViewIcon = styled(Visibility)`
  fill: ${({ theme }) => theme.palette.primary.main};
  width: 15px;
  height: 15px;
`;
