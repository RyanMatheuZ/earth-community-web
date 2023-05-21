import styled from 'styled-components';

import { Typography } from '@mui/material';

export const Container = styled.div`
  background-color: #F1F1F1;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  height: 100vh;
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  padding-bottom: ${({ theme }) => theme.spacing(10)};
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const LoadingText = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  background-color: ${({ theme }) => theme.palette.common.white};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 30px;
  font-weight: 600;
  margin-block: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(2)};
`;
