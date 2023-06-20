import styled from 'styled-components';

import Link from 'next/link';

import { Typography, Skeleton } from '@mui/material';
import { Group, Grade } from '@mui/icons-material';

export const MembersIcon = styled(Group)`
  fill: ${({ theme }) => theme.palette.primary.main};
  width: 30px;
  height: 30px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const Card = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(2)};
  position: relative;
`;

export const CardSkeleton = styled(Skeleton).attrs({
  variant: 'rectangular'
})`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 10px;
  padding: ${({ theme }) => theme.spacing(2)};
  width: 100%;
  height: 80px;
`;

export const PhotoAndName = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-inline: ${({ theme }) => theme.spacing(2, 1)};
  max-width: 120px;
  width: fit-content;
`;

export const GroupOwner = styled(Typography)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(.5)};
  position: absolute;
  top: -10px;
  right: -10px;
`;

export const OwnerIcon = styled(Grade)`
  fill: ${({ theme }) => theme.palette.common.white};
  width: 15px;
  height: 15px;
`;

export const NickName = styled(Link)`
  color: ${({ theme }) => theme.palette.common.white};
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-radius: 10px;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing(1)};
  max-width: 100px;
  width: fit-content;

  &:visited {
    color: ${({ theme }) => theme.palette.common.white};
  }
`;

export const RemainingMembers = styled(Typography)`
  color: ${({ theme }) => theme.palette.common.white};
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-radius: 10px;
  font-weight: 600;
  margin-top: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(1, 2)};
`;
