import styled from 'styled-components';

import { Typography } from '@mui/material';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.lightGray.main};
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow-y: auto;
  padding-inline: ${({ theme }) => theme.spacing(1)};
  height: 88vh;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1800px;
  width: 100%;
  height: 100%;
`;

export const LoadingText = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  background-color: ${({ theme }) => theme.palette.common.white};
  box-shadow: rgba(0, 0, 0, .16) 0px 1px 4px;
  border-radius: 30px;
  font-weight: 600;
  margin: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(2)};
`;
