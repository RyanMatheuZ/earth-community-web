import { type FC } from 'react';

import Image from 'next/image';

import { useFormContext } from 'react-hook-form';

import { Typography, Radio } from '@mui/material';

import { RadioButton } from '@components/elements';

import { donationOptions } from './utils';
import { type GiverDefaultValues } from '../utils';

import * as S from './styles';
import * as DonateS from '../styles';

const DonationAmounts: FC = () => {
  const { control, setValue } = useFormContext<GiverDefaultValues>();

  const iconDescription = 'Método de doação PIX';

  const validateTransactionAmount = (value: string) => {
    const hasLetters = /[a-zA-Z]/.test(value);
    const isNumeric = /^\d+$/.test(value);
    if (hasLetters || !isNumeric || +value < 1) setValue('transactionAmount', '');
    else setValue('transactionAmount', value);
  };

  return (
    <>
      <DonateS.StepDescription>
        <DonateS.StepHighlightedText>Vamos começar!</DonateS.StepHighlightedText> <br />
        Escolha uma quantia em dinheiro para <br /> prosseguir com a doação.
      </DonateS.StepDescription>
      <S.Container>
        <RadioButton
          control={control}
          name='transactionAmount'
        >
          <S.DonationOptionsContainer>
            {donationOptions.map(({ label, value, icon }, index) => (
              <S.StyledFormControlLabel
                key={`donation-option-${label}-${index}`}
                value={value}
                control={<Radio />}
                label={
                  <>
                    <S.CardLabel>{icon} {label}</S.CardLabel>
                    <S.MonetaryValue>R$ {value}</S.MonetaryValue>
                  </>
                }
              />
            ))}
            <S.CustomFormControlLabel>
              <S.CardLabel><S.CustomDonationIcon />Outro valor</S.CardLabel>
              <S.CustomDonationInput
                type='text'
                placeholder='R$ ?'
                onChange={({ target: { value } }) => validateTransactionAmount(value)}
              />
            </S.CustomFormControlLabel>
          </S.DonationOptionsContainer>
        </RadioButton>
        <S.DonationMethod>
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
        </S.DonationMethod>
        <S.Warning>
          * As doações serão salvas em sua conta caso esteja autenticado
        </S.Warning>
      </S.Container>
    </>
  );
};

export default DonationAmounts;
