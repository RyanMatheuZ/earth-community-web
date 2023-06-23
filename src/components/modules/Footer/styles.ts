import styled from 'styled-components';

import { Typography } from '@mui/material';

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(8, 4)};
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.main};
  box-shadow: ${({ theme }) => theme.palette.secondary.main} 10px 10px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(6)};
  max-width: 1200px;
  width: 100%;

  @media ${({ theme }) => theme.breakpoints.down('mobile')} {
    flex-direction: column;
    align-items: start;
    padding: ${({ theme }) => theme.spacing(2)};
  }
`;

export const ListTitle = styled(Typography)`
  color: ${({ theme }) => theme.palette.tertiary.main};
  font-size: 1.65rem;
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing(.5)};
`;

export const ListText = styled(Typography)`
  color: ${({ theme }) => theme.palette.common.white};
  font-size: 1.1rem;
  font-weight: 500;
`;
