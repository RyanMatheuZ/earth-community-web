import { useState, type FC, type PropsWithChildren, type Dispatch, type SetStateAction } from 'react';

import { Step, StepLabel, Fade } from '@mui/material';

import { steps, resolveStepIcon, isFormFieldsFilledCorrectly } from './utils';

import {
  StepperConnector,
  StepContainer,
  StyledStepper,
  Container,
  ButtonContainer,
  NextButton,
  PreviousButton
} from './styles';

interface DonationStepperProps extends PropsWithChildren {
  activeStep: number;
  setActiveStep: Dispatch<SetStateAction<number>>;
}

const DonationStepper: FC<DonationStepperProps> = ({ children, activeStep = 0, setActiveStep }) => {
  const [isActiveFade, setIsActiveFade] = useState(true);

  const conditionsToNextStep = {
    '0-step': !isFormFieldsFilledCorrectly(['transactionAmount']),
    '1-step': !isFormFieldsFilledCorrectly(['firstName', 'surname', 'email', 'cpf']),
    '2-step': !isFormFieldsFilledCorrectly(['zipCode', 'streetName', 'district', 'streetNumber', 'city', 'state']),
    '3-step': activeStep === steps.length - 1
  };

  const handleToggleFade = (stepFn: () => void) => {
    setIsActiveFade(false);

    setTimeout(() => {
      setIsActiveFade(true);
    }, 250);

    setTimeout(() => {
      stepFn();
    }, 250);
  };

  const nextStep = () => {
    handleToggleFade(
      () => setActiveStep((prevState) => prevState + 1)
    );
  };

  const previousStep = () => {
    handleToggleFade(
      () => setActiveStep((prevState) => prevState - 1)
    );
  };

  return (
    <Container>
      <StyledStepper
        activeStep={activeStep}
        connector={<StepperConnector />}
        alternativeLabel
      >
        {steps.map(({ label }, index) => (
          <Step key={`step-${label}-${index}`}>
            <StepLabel StepIconComponent={resolveStepIcon}>
              {label}
            </StepLabel>
          </Step>
        ))}
      </StyledStepper>
      <Fade
        in={isActiveFade}
        unmountOnExit
      >
        <StepContainer>
          {children}
        </StepContainer>
      </Fade>
      <ButtonContainer>
        <PreviousButton
          onClick={previousStep}
          disabled={activeStep === 0 || activeStep === 3}
        >
          Voltar
        </PreviousButton>
        <NextButton
          onClick={nextStep}
          disabled={conditionsToNextStep[`${activeStep}-step` as keyof typeof conditionsToNextStep]}
          type={activeStep < 2 ? 'button' : 'submit'}
        >
          {activeStep < 2 ? 'Próximo' : 'Solicitar'}
        </NextButton>
      </ButtonContainer>
    </Container>
  );
};

export default DonationStepper;
