import styled from 'styled-components';

import { Typography, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';

export const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const AuthorName = styled(Typography)`
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;

export const Comment = styled.article`
  color: ${({ theme }) => theme.palette.tertiary.main};
  border: 1px solid ${({ theme }) => theme.palette.secondary.main};
  border-radius: 5px;
  padding: ${({ theme }) => theme.spacing(1)};
  position: relative;
`;

export const CreatedAt = styled.span`
  color: ${({ theme }) => theme.palette.primary.main};
  background-color: ${({ theme }) => theme.palette.common.white};
  font-size: .75rem;
  font-weight: 600;
  padding-inline: ${({ theme }) => theme.spacing(.5)};
  position: absolute;
  bottom: -8px;
  right: 5px;
`;

export const DeleteButton = styled(IconButton)`
  background-color: ${({ theme }) => theme.palette.error.main};
  padding: ${({ theme }) => theme.spacing(.5)};
  position: absolute;
  top: -15px;
  right: -15px;
  transition: all 275ms cubic-bezier(.17,.15,.83,.86); // https://cubic-bezier.com/#.17,.15,.83,.86

  &:hover {
    background-color: ${({ theme }) => theme.palette.error.light};
  }
`;

export const DeleteIcon = styled(Delete)`
  color: ${({ theme }) => theme.palette.common.white};
  width: 15px;
  height: 15px;
`;
