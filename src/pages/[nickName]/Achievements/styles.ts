import styled, { css } from 'styled-components';

import { Typography, Skeleton } from '@mui/material';
import { EmojiEvents, Star } from '@mui/icons-material';

interface CardProps {
  completed: boolean;
}

const cardBaseStyles = css`
  box-shadow: rgba(0, 0, 0, .1) 0px 4px 12px;
  border-radius: 10px 10px 50% 50%;
  max-width: 290px;
  width: 100%;
  height: 275px;
`;

const cardIconBaseStyles = css`
  fill: ${({ theme }) => theme.palette.primary.main};
  width: 20px;
  height: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};

  @media ${({ theme }) => theme.breakpoints.down('laptop')} {
    justify-content: center;
  }
`;

export const Card = styled.div<CardProps>`
  background-color: ${({ theme }) => theme.palette.primary.main};
  opacity: ${({ completed }) => completed ? 1 : .65};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(2)};
  position: relative;
  ${cardBaseStyles}
`;

export const CardSkeleton = styled(Skeleton).attrs({
  variant: 'rectangular'
})`
  ${cardBaseStyles}
`;

export const CardIcon = styled.div`
  background-color: ${({ theme }) => theme.palette.common.white};
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  position: absolute;
  top: -10px;
`;

export const CardLeftIcon = styled(Star)`
  ${cardIconBaseStyles}
`;

export const CardRightIcon = styled(Star)`
  ${cardIconBaseStyles}
`;

export const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.common.white};
  font-weight: 1.1rem;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
`;

export const Icon = styled(Typography)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Description = styled(Typography)`
  color: ${({ theme }) => theme.palette.common.white};
  font-weight: 600;
  text-align: center;
  white-space: pre-line;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

export const AchievementIcon = styled(EmojiEvents)`
  fill: ${({ theme }) => theme.palette.primary.main};
  width: 30px;
  height: 30px;
`;
