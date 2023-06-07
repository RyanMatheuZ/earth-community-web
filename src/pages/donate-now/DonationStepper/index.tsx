import { useState, type FC, type PropsWithChildren, type Dispatch, type SetStateAction } from 'react';

import { Step, StepLabel, Fade } from '@mui/material';

import { steps, resolveStepIcon, isFormFieldsFilledCorrectly } from './utils';

import * as S from './styles';

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
    const timeoutValue = 250;

    setIsActiveFade(false);

    setTimeout(() => {
      setIsActiveFade(true);
    }, timeoutValue);

    setTimeout(() => {
      stepFn();
    }, timeoutValue);
  };

  const handleStep = (action: 'next' | 'previous') => {
    const operator = action === 'next' ? '+' : '-';

    handleToggleFade(
      () => setActiveStep((prevState) => eval(`${prevState} ${operator} 1`))
    );
  };

  return (
    <S.Container>
      <S.StyledStepper
        activeStep={activeStep}
        connector={<S.StepperConnector />}
        alternativeLabel
      >
        {steps.map(({ label }, index) => (
          <Step key={`step-${label}-${index}`}>
            <StepLabel StepIconComponent={resolveStepIcon}>
              {label}
            </StepLabel>
          </Step>
        ))}
      </S.StyledStepper>
      <Fade
        in={isActiveFade}
        unmountOnExit
      >
        <S.StepContainer>
          {children}
        </S.StepContainer>
      </Fade>
      <S.ButtonContainer>
        <S.PreviousButton
          onClick={() => handleStep('previous')}
          disabled={activeStep === 0 || activeStep === 3}
        >
          Voltar
        </S.PreviousButton>
        <S.NextButton
          onClick={() => handleStep('next')}
          disabled={conditionsToNextStep[`${activeStep}-step` as keyof typeof conditionsToNextStep]}
          type={activeStep < 2 ? 'button' : 'submit'}
        >
          {activeStep < 2 ? 'Próximo' : 'Solicitar'}
        </S.NextButton>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default DonationStepper;
