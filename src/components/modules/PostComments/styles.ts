import styled from 'styled-components';

import { Dialog } from '@mui/material';

export const Container = styled(Dialog)`
  margin: 0 auto;

  & .MuiPaper-root {
    max-width: 800px;
    width: 100%;
    min-height: 600px;

    @media ${({ theme }) => theme.breakpoints.down('laptop')} {
      margin: 0;
    }
  }
`;
