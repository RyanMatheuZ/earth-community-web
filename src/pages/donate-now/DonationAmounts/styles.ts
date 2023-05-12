import styled, { css } from 'styled-components';

import { FormControlLabel, Typography } from '@mui/material';

import { Grass, Spa, LocalFlorist, Nature, Forest, Diversity3 } from '@mui/icons-material';

const baseIconStyles = css`
  fill: ${({ theme }) => theme.palette.secondary.main};
  width: 25px;
  height: 25px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DonationOptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(3, 2)};
`;

export const StyledFormControlLabel = styled(FormControlLabel)`
  border: 2px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 10px 30px 10px 30px;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(1)};
  margin: 0;
  width: 250px;
`;

export const CardLabel = styled(Typography)`
  color: ${({ theme }) => theme.palette.tertiary.main};
  display: flex;
  align-items: center;
  font-weight: 600;
  gap: ${({ theme }) => theme.spacing(1)};
  width: 100%;
`;

export const MonetaryValue = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 1.25rem;
  font-weight: 500;
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing(1)};
`;

export const DonationMethod = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)};
  margin-block: ${({ theme }) => theme.spacing(3)};
`;

export const SeedIcon = styled(Grass)`
  ${baseIconStyles}
`;

export const BudIcon = styled(Spa)`
  ${baseIconStyles}
`;

export const PlantIcon = styled(LocalFlorist)`
  ${baseIconStyles}
`;

export const TreeIcon = styled(Nature)`
  ${baseIconStyles}
`;

export const ForestIcon = styled(Forest)`
  ${baseIconStyles}
`;

export const CommunityIcon = styled(Diversity3)`
  ${baseIconStyles}
`;
