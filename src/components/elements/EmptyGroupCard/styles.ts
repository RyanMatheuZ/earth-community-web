import styled from 'styled-components';

import { Typography, IconButton } from '@mui/material';
import { Add } from '@mui/icons-material';

export const Container = styled.div`
  box-shadow: rgba(0, 0, 0, .1) 0px 4px 12px;
  border: 2px dashed ${({ theme }) => theme.palette.primary.main};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(2)};
  max-width: 290px;
  width: 100%;
  height: 275px;
`;

export const Message = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: 600;
  text-align: center;
`;

export const StyledIconButton = styled(IconButton)`
  border: 2px dashed ${({ theme }) => theme.palette.primary.main};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CreateGroupIcon = styled(Add)`
  fill: ${({ theme }) => theme.palette.primary.main};
  width: 20px;
  height: 20px;
`;
