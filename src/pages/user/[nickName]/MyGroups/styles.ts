import styled from 'styled-components';

import { Groups } from '@mui/icons-material';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(2)};

  @media ${({ theme }) => theme.breakpoints.down('laptop')} {
    justify-content: center;
  }
`;

export const YourGroupsIcon = styled(Groups)`
  fill: ${({ theme }) => theme.palette.primary.main};
  width: 30px;
  height: 30px;
`;
