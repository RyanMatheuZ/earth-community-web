import styled from 'styled-components';

import { Typography } from '@mui/material';

interface ContainerProps {
  isBackgroundWhite: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: ${({ isBackgroundWhite, theme }) => isBackgroundWhite ? theme.palette.common.white : theme.palette.lightGray.main};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const Message = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  text-align: center;
  white-space: pre-line;
  font-weight: 500;
`;
