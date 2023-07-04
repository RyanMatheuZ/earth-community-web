import styled from 'styled-components';

import { Typography } from '@mui/material';

export const Container = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  background-color: ${({ theme }) => theme.palette.common.white};
  box-shadow: rgba(0, 0, 0, .16) 0px 1px 4px;
  border-radius: 30px;
  font-weight: 600;
  margin: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(2)};
`;
