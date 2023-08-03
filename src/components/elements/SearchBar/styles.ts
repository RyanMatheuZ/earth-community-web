import styled from 'styled-components';

import { TextField, InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';

export const StyledInput = styled(TextField).attrs({
  variant: 'filled'
})`
  max-width: 325px;
  width: 100%;

  & div {
    background-color: #EDECED;
    border-radius: 50px;
    padding-left: ${({ theme }) => theme.spacing(1.5)};

    &:focus,
    &:focus-visible,
    &:focus-within {
      background-color: #EDECED;
    }

    &:hover {
      background-color: #E9E9E9;
    }

    &::before,
    &::after,
    &:hover:not(.Mui-disabled)::before {
      border-bottom: none;
    }
  }

  & input {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding-block: ${({ theme }) => theme.spacing(2)};
  }

  & label {
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 1rem;
    font-weight: 600;
    padding-left: ${({ theme }) => theme.spacing(2)};

    &.Mui-focused {
      color: ${({ theme }) => theme.palette.secondary.main};
    }
  }
`;

export const StyledInputAdorment = styled(InputAdornment)`
  margin-block: ${({ theme }) => theme.spacing(2)};
`;

export const SearchIcon = styled(Search)`
  fill: ${({ theme }) => theme.palette.primary.main};
  width: 25px;
  height: 25px;
`;
