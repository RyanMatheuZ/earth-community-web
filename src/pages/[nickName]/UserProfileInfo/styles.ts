import styled from 'styled-components';

import Image from 'next/image';

import { Typography, Button } from '@mui/material';
import { Edit, Public } from '@mui/icons-material';

export const Container = styled.section`
  background-color: ${({ theme }) => theme.palette.common.white};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 10px;
  margin: ${({ theme }) => theme.spacing(2, 4)};
`;

export const UserBackgroundProfile = styled(Image)`
  border-radius: 10px 10px 0 0;
  object-fit: cover;
  object-position: center;
  position: static !important;
  height: 200px !important;
`;

export const UserPictureProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-inline: ${({ theme }) => theme.spacing(4)};
  transform: translateY(-35%);
`;

export const UserName = styled(Typography)`
  color: ${({ theme }) => theme.palette.tertiary.main};
  font-size: 2rem;
  font-weight: 600;
  margin-top: ${({ theme }) => theme.spacing(1)};
`;

export const CityAndState = styled(Typography)`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  gap: ${({ theme }) => theme.spacing(1)};
  margin-top: ${({ theme }) => theme.spacing(1)};
`;

export const EditProfileButton = styled(Button)`
  background-color: ${({ theme }) => theme.palette.common.white};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  min-width: 55px;
  height: 55px;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  transition: all 275ms cubic-bezier(.17,.15,.83,.86); // https://cubic-bezier.com/#.17,.15,.83,.86

  &:hover {
    background-color: ${({ theme }) => theme.palette.common.white};
    filter: brightness(.9);
  }
`;

export const EditIcon = styled(Edit)`
  width: 30px;
  height: 30px;
`;

export const GlobeIcon = styled(Public)`
  fill: ${({ theme }) => theme.palette.primary.main};
  width: 20px;
  height: 20px;
`;