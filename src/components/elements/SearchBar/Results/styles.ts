import styled, { css } from 'styled-components';

import Link from 'next/link';

import { Skeleton, Typography } from '@mui/material';
import { WavingHand } from '@mui/icons-material';

const cardBaseStyles = css`
  box-shadow: rgba(0, 0, 0, .24) 0px 3px 8px;
  border-radius: 10px;
  padding: ${({ theme }) => theme.spacing(2)};
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  ${cardBaseStyles}
`;

export const CardSkeleton = styled(Skeleton).attrs({
  variant: 'rectangular'
})`
  height: 80px;
  ${cardBaseStyles}
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Name = styled(Typography)`
  color: ${({ theme }) => theme.palette.common.white};
  font-weight: 600;
`;

export const Identifier = styled(Typography)`
  color: ${({ theme }) => theme.palette.tertiary.main};
  font-size: .9rem;
  font-weight: 500;
`;

export const VisitLink = styled(Link)`
  color: ${({ theme }) => theme.palette.primary.main};
  background-color: ${({ theme }) => theme.palette.common.white};
  box-shadow: rgba(100, 100, 111, .2) 0px 7px 29px 0px;
  border-radius: 10px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(1, 2)};

  &:visited {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export const VisitIcon = styled(WavingHand)`
  fill: ${({ theme }) => theme.palette.primary.main};
  width: 20px;
  height: 20px;
`;

export const NoResultsMessage = styled(Typography)`
  color: ${({ theme }) => theme.palette.tertiary.main};
  font-size: 1.1rem;
  font-weight: 600;
`;
