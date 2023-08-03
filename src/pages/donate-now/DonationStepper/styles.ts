import styled, { css } from 'styled-components';

import { Stepper, Button } from '@mui/material';
import { styled as MuiStyled } from '@mui/material/styles';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

const baseButtonStyles = css`
  font-weight: 600;
  padding: ${({ theme }) => theme.spacing(1, 2)};
  width: 140px;

  &.MuiButtonBase-root.Mui-disabled {
    opacity: .5;
  }
`;

export const StepIconRoot = MuiStyled('div')<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color: theme.palette.secondary.main,
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
      color: theme.palette.primary.main,
    }),
    '& .QontoStepIcon-completedIcon': {
      color: theme.palette.primary.main,
      zIndex: 1,
      fontSize: 18,
    },
    '& .QontoStepIcon-circle': {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
    },
  }),
);

export const StepperConnector = MuiStyled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)'
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.primary.main
    }
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.primary.main
    }
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.secondary.main,
    borderTopWidth: 3,
    borderRadius: 1
  }
}));

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing(3)};
  height: 100%;
`;

export const StyledStepper = styled(Stepper)`
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const NextButton = styled(Button).attrs({ variant: 'outlined' })`
  ${baseButtonStyles}
  color: ${({ theme }) => theme.palette.common.white};
  background-color: ${({ theme }) => theme.palette.primary.main};

  &.MuiButtonBase-root.Mui-disabled,
  &:hover {
    color: ${({ theme }) => theme.palette.common.white};
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export const PreviousButton = styled(Button).attrs({ variant: 'outlined' })`
  ${baseButtonStyles}
  color: ${({ theme }) => theme.palette.primary.main};
  background-color: ${({ theme }) => theme.palette.common.white};
  border: 2px solid ${({ theme }) => theme.palette.primary.main};

  &.MuiButtonBase-root.Mui-disabled,
  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
    border: 2px solid ${({ theme }) => theme.palette.primary.main};
  }
`;
