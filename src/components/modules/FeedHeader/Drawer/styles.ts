import styled from 'styled-components';

import { Drawer } from '@mui/material';

export const Container = styled(Drawer)`
  & .MuiPaper-root {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(2)};
    padding: ${({ theme }) => theme.spacing(1)};
    width: 50%;
  }
`;
