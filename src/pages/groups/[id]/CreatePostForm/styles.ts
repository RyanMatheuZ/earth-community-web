import styled from 'styled-components';

import Image from 'next/image';

import { Typography } from '@mui/material';
import { Wallpaper } from '@mui/icons-material';

export const ImageContainer = styled.div`
  border: 2px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 3px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(.5)};
  height: 300px;
  position: relative;
`;

export const StyledImagePreview = styled(Image)`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border: 1px solid ${({ theme }) => theme.palette.secondary.main};
  border-radius: 3px;
  object-fit: cover;
  object-position: center;
  position: static !important;
  width: 100% !important;
  height: 100% !important;
`;

export const ImageErrorMessage = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing(1)};
`;

export const IconContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.common.white};
  border: 2px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: ${({ theme }) => theme.spacing(.5)};
  width: fit-content;
  height: fit-content;
  position: absolute;
  inset: 0;
  transition: all 275ms cubic-bezier(.17,.15,.83,.86); // https://cubic-bezier.com/#.17,.15,.83,.86

  &:hover {
    background-color: ${({ theme }) => theme.palette.common.white};
    filter: brightness(.9);
  }
`;

export const WallpaperIcon = styled(Wallpaper)`
  fill: ${({ theme }) => theme.palette.primary.main};
  width: 35px;
  height: 35px;
`;

export const ImageUploadingMessage = styled(Typography)`
  color: ${({ theme }) => theme.palette.secondary.main};
  font-size: .85rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)};
`;
