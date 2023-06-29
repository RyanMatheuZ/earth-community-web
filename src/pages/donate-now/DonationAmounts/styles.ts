import styled, { css } from 'styled-components';

import { FormControlLabel, Typography, TextField } from '@mui/material';

import { Spa, LocalFlorist, Nature, Forest, Diversity3, AccountBalanceWallet } from '@mui/icons-material';

const baseIconStyles = css`
  fill: ${({ theme }) => theme.palette.secondary.main};
  width: 25px;
  height: 25px;
`;

const baseControlLabelStyles = css`
  border: 2px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 10px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(1)};
  margin: 0;
  width: 250px;
  height: 110px;
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
  ${baseControlLabelStyles}
`;

export const CustomFormControlLabel = styled.div`
  ${baseControlLabelStyles}
`;

export const CardLabel = styled(Typography)`
  color: ${({ theme }) => theme.palette.tertiary.main};
  display: flex;
  align-items: center;
  justify-content: center;
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

export const CustomDonationInput = styled(TextField)`
  input {
    color: ${({ theme }) => theme.palette.primary.main};
    text-align: center;
    font-weight: 600;
    height: 10px;
  }

  & div {
    border-radius: 10px 25px;
  }

  .MuiOutlinedInput-root {
    fieldset,
    &.Mui-focused fieldset {
      border-width: 2px;
      border-color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`;

export const Warning = styled.span`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: .85rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;

export const DonationMethod = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)};
  margin-top: ${({ theme }) => theme.spacing(2)};
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

export const CustomDonationIcon = styled(AccountBalanceWallet)`
  ${baseIconStyles}
`;
