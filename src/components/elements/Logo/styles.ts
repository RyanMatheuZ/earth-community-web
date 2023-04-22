import styled from 'styled-components';

import { Typography } from '@mui/material';

export const Container = styled.figure`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  width: fit-content;
`;

export const Title = styled(Typography).attrs({
  variant: 'h1'
})`
  color: ${({ theme }) => theme.palette.primary.main};
`;
