import styled from 'styled-components';

import { DialogActions } from '@mui/material';

export const Container = styled(DialogActions)`
  display: flex;
  align-items: start;
  padding: ${({ theme }) => theme.spacing(2, 3)};
`;
