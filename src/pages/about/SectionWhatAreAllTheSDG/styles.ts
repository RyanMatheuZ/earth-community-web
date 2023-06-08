import styled from 'styled-components';

import { Visibility } from '@mui/icons-material';

import { type SDGTheme } from '../utils';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  width: 100%;
`;

export const SDGContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(5)};
  width: 100%;
`;

export const SDGCard = styled.div`
  width: 120px;
  height: 120px;
  position: relative;

  & img {
    border-radius: 5px;
  }

  &:hover{
    cursor: pointer;
    filter: brightness(.9);
  }
`;

export const ViewIcon = styled(Visibility) <SDGTheme>`
  fill: ${({ $sdgColor }) => $sdgColor};
  background-color: ${({ theme }) => theme.palette.common.white};
  border: 2px solid ${({ $sdgColor }) => $sdgColor};
  border-radius: 50%;
  padding: ${({ theme }) => theme.spacing(.5)};
  width: 25px;
  height: 25px;
  position: absolute;
  top: -5px;
  right: -5px;
`;
