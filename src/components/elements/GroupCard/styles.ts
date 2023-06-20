import styled, { css } from 'styled-components';

import Link from 'next/link';

import { Typography } from '@mui/material';
import { Group, WavingHand } from '@mui/icons-material';

interface CardProps {
  backgroundImageURL: string;
}

const iconBaseStyles = css`
  fill: ${({ theme }) => theme.palette.common.white};
  width: 20px;
  height: 20px;
`;

export const Card = styled.div<CardProps>`
  background: url(${({ backgroundImageURL }) => backgroundImageURL}) center center / cover;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(2)};
  max-width: 290px;
  width: 100%;
  height: 275px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MembersLength = styled(Typography)`
  color: ${({ theme }) => theme.palette.common.white};
  background-color: ${({ theme }) => theme.palette.primary.main};
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  border-radius: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(1, 2)};
  width: fit-content;
`;

export const MembersIcon = styled(Group)`
  ${iconBaseStyles}
`;

export const Category = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.main};
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(1)};
`;

export const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.common.white};
  background-color: ${({ theme }) => theme.palette.primary.main};
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  border-radius: 20px;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing(15)};
  margin-inline: auto;
  padding: ${({ theme }) => theme.spacing(1, 2)};
  width: fit-content;
`;

export const VisitGroupLink = styled(Link)`
  color: ${({ theme }) => theme.palette.common.white};
  background-color:  ${({ theme }) => theme.palette.secondary.main};
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(1, 2)};
  transform: translateY(60%);

  &:hover {
    background-color:  ${({ theme }) => theme.palette.secondary.main};
    filter: brightness(.9);
  }
`;

export const VisitGroupIcon = styled(WavingHand)`
  ${iconBaseStyles}
`;
