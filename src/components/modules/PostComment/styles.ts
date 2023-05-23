import styled from 'styled-components';

import { Dialog, DialogTitle, DialogActions, Typography } from '@mui/material';

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

export const CommentContainer = styled.div`
`;

export const NoCommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const NoCommentsMessage = styled(Typography)`
  text-align: center;
  font-weight: 500;
`;

export const PostTitle = styled(DialogTitle)`
  color: ${({ theme }) => theme.palette.tertiary.main};
  text-align: center;
  font-weight: 600;
`;

export const StyledDialogActions = styled(DialogActions)`

`;
