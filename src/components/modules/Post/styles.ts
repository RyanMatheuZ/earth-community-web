import styled, { css } from 'styled-components';

import NextImage from 'next/image';

import { Typography, ToggleButton, Badge } from '@mui/material';
import { Favorite, FavoriteBorderOutlined, Comment } from '@mui/icons-material';

export const iconBaseStyles = css`
  fill: ${({ theme }) => theme.palette.primary.main};
  width: 25px;
  height: 25px;
`;

export const Container = styled.article`
  background-color: ${({ theme }) => theme.palette.common.white};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin-block: ${({ theme }) => theme.spacing(1)};
  max-width: 600px;
  width: 100%;
`;

export const Header = styled.header`
  padding: ${({ theme }) => theme.spacing(1)};
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const PictureContainer = styled.div`
  display: flex;
`;

export const AdditionalInformation = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CreatedBy = styled(Typography)`
  font-weight: 600;
  display: inline-block;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled(Typography)`
  padding: ${({ theme }) => theme.spacing(0, 2, 1, 2)};
  white-space: pre-line;
`;

export const Image = styled(NextImage)`
  object-fit: contain;
  position: static !important;
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const StyledToggleButton = styled(ToggleButton)`
  color: ${({ theme }) => theme.palette.tertiary.main};
  border-radius: 0;
  gap: ${({ theme }) => theme.spacing(1)};
  padding-block: ${({ theme }) => theme.spacing(3, 2)};
  width: 50%;
`;

export const StyledBadge = styled(Badge).attrs({ color: 'secondary' })`
  span {
    color: ${({ theme }) => theme.palette.tertiary.main};
    font-weight: 600;
    top: -1px;
    right: -1px;
  }
`;

export const MenuItemContainer = styled.div`
  margin-left: auto;
`;

export const CommentIcon = styled(Comment)`
  ${iconBaseStyles}
`;

export const EnabledLikeIcon = styled(Favorite)`
  ${iconBaseStyles}
`;

export const DisabledLikeIcon = styled(FavoriteBorderOutlined)`
  ${iconBaseStyles}
`;
