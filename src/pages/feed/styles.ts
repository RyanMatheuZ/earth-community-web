import styled from 'styled-components';

import { scrollbarBaseStyles } from '@styles/constants/scrollbar';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.lightGray.main};
  display: flex;
  flex-direction: column;
  overflow-y: clip;
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
  ${scrollbarBaseStyles}
`;

export const Content = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1800px;
  width: 100%;
  height: 100%;
`;
