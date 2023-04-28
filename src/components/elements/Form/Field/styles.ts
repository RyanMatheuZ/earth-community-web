import styled from 'styled-components';

import { TextField } from '@mui/material';
import { Error } from '@mui/icons-material';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTextField = styled(TextField)`
  input {
    font-size: 1.15rem;
    padding: ${({ theme }) => theme.spacing(2)};
  }

  label {
    color: ${({ theme }) => theme.palette.primary.main};
    font-weight: 500;
  }

  fieldset {
    border-width: 2px;
    border-color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export const ErrorIcon = styled(Error)`
  fill: ${({ theme }) => theme.palette.error.light};
  width: 13px;
  height: 13px;
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.palette.error.light};
  font-size: .85rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(.5)};
  margin-block: ${({ theme }) => theme.spacing(.25, .5)};
  margin-left: ${({ theme }) => theme.spacing(1)};
`;
