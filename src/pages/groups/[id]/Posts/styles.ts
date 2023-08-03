import styled from 'styled-components';

import { Button, Typography } from '@mui/material';
import { PostAdd } from '@mui/icons-material';

export const PostIcon = styled(PostAdd)`
  fill: ${({ theme }) => theme.palette.primary.main};
  width: 30px;
  height: 30px;
`;

export const CreatePostButton = styled(Button)`
  color: ${({ theme }) => theme.palette.common.white};
  background-color: ${({ theme }) => theme.palette.primary.main};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)};
  position: absolute;
  top: -10px;
  right: -10px;
  transition: all 500ms ease;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
    filter: brightness(.9);
  }
`;

export const CreatePostIcon = styled(PostAdd)`
  fill: ${({ theme }) => theme.palette.common.white};
  width: 20px;
  height: 20px;
`;

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const NoPostsContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.common.white};
  box-shadow: rgba(100, 100, 111, .2) 0px 7px 29px 0px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const NoPostsMessage = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  text-align: center;
  font-weight: 500;
`;
