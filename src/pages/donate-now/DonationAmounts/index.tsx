import { type FC } from 'react';

import Image from 'next/image';

import { useFormContext } from 'react-hook-form';

import { Typography, Radio } from '@mui/material';

import { RadioButton } from '@components/elements';

import { donationOptions } from './utils';

import {
  Container,
  DonationOptionsContainer,
  StyledFormControlLabel,
  CardLabel,
  MonetaryValue,
  DonationMethod
} from './styles';
import { StepDescription, StepHighlightedText } from '../styles';

const DonationAmounts: FC = () => {
  const { control } = useFormContext();

  const iconDescription = 'Método de doação PIX';

  return (
    <>
      <StepDescription>
        <StepHighlightedText>Vamos começar!</StepHighlightedText> <br />
        Escolha uma quantia em dinheiro para <br /> prosseguir com a doação.
      </StepDescription>
      <Container>
        <RadioButton
          control={control}
          name='transactionAmount'
        >
          <DonationOptionsContainer>
            {donationOptions.map(({ label, value, icon }, index) => (
              <StyledFormControlLabel
                key={`donation-option-${label}-${index}`}
                value={value}
                control={<Radio />}
                label={
                  <>
                    <CardLabel>{icon} {label}</CardLabel>
                    <MonetaryValue>R$ {value}</MonetaryValue>
                  </>
                }
              />
            ))}
          </DonationOptionsContainer>
        </RadioButton>
        <DonationMethod>
          <Typography>
            Método de doação:
          </Typography>
          <Image
            src='/icons/pix.svg'
            alt={iconDescription}
            title={iconDescription}
            width='20'
            height='20'
          />
        </DonationMethod>
      </Container>
    </>
  );
};

export default DonationAmounts;
