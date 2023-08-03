import styled from 'styled-components';

import { Typography } from '@mui/material';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const Message = styled(Typography)`
  text-align: center;
  font-weight: 500;
`;
