import styled from 'styled-components';

import { Typography } from '@mui/material';

export const Container = styled.section`
  background-color: ${({ theme }) => theme.palette.common.white};
  box-shadow: rgba(100, 100, 111, .2) 0px 7px 29px 0px;
  border-radius: 10px;
  padding: ${({ theme }) => theme.spacing(2)};
  position: relative;
`;

export const TopicItem = styled(Typography).attrs({
  variant: 'h2'
})`
  color: ${({ theme }) => theme.palette.primary.main};
  border-left: 5px solid ${({ theme }) => theme.palette.primary.main};
  font-size: 1.3rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  padding-left: ${({ theme }) => theme.spacing(2)};
`;

export const Content = styled.div`
  margin-top: ${({ theme }) => theme.spacing(3)};
`;
