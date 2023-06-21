import styled, { css } from 'styled-components';

import { Button, Typography } from '@mui/material';
import { TrendingUp, Groups, Add } from '@mui/icons-material';

const iconBaseStyles = css`
  fill: ${({ theme }) => theme.palette.primary.main};
  width: 30px;
  height: 30px;
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.lightGray.main};
  min-height: 100vh;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(3)};
  max-width: 1800px;
  width: 100%;
`;

export const Title = styled(Typography).attrs({
  variant: 'h1'
})`
  color: ${({ theme }) => theme.palette.primary.main};
  margin-block: ${({ theme }) => theme.spacing(6, 2)};
`;

export const Description = styled(Typography)`
  font-size: 1.1rem;
`;

export const GroupContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(2)};

  @media ${({ theme }) => theme.breakpoints.down('laptop')} {
    justify-content: center;
  }
`;

export const CreateGroupButton = styled(Button)`
  color: ${({ theme }) => theme.palette.common.white};
  background-color: ${({ theme }) => theme.palette.primary.main};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)};
  position: absolute;
  top: -10px;
  right: -10px;
  transition: all 500ms ease;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
    filter: brightness(.9);
  }
`;

export const CreateGroupIcon = styled(Add)`
  fill: ${({ theme }) => theme.palette.common.white};
  width: 20px;
  height: 20px;
`;

export const TrendingIcon = styled(TrendingUp)`
  ${iconBaseStyles}
`;

export const GroupIcon = styled(Groups)`
  ${iconBaseStyles}
`;
