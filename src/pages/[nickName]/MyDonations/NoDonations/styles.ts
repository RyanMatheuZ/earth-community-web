import styled from 'styled-components';

import { Typography } from '@mui/material';

export const NoDonationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NoDonationsMessage = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  text-align: center;
  font-weight: 500;
`;
