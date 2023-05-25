import styled from 'styled-components';

import { DialogTitle } from '@mui/material';

export const Container = styled(DialogTitle)`
  color: ${({ theme }) => theme.palette.tertiary.main};
  text-align: center;
  font-weight: 600;
`;
