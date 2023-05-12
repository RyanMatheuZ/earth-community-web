import { type FC } from 'react';

import { useFormContext } from 'react-hook-form';

import { Field } from '@components/elements';
import { HalfToHalfContainer } from '@components/modules';

import { formatCPF, validateCPF } from '@utils/inputs/cpf';

import { type GiverDefaultValues } from '../utils';

import { StepDescription, StepHighlightedText } from '../styles';

const DonationPersonalDataFields: FC = () => {
  const { control, setValue, setError, clearErrors, formState: { errors } } = useFormContext<GiverDefaultValues>();

  return (
    <>
      <StepDescription>
        <StepHighlightedText>Muito bem!</StepHighlightedText> <br />
        Agora preencha seus dados pessoais para <br /> conseguirmos te identificar.
      </StepDescription>
      <HalfToHalfContainer>
        <Field
          control={control}
          errors={errors}
          type='text'
          name='firstName'
          label='Nome:'
          $themeColor='green'
        />
        <Field
          control={control}
          errors={errors}
          type='text'
          name='surname'
          label='Sobrenome:'
          $themeColor='green'
        />
      </HalfToHalfContainer>
      <Field
        control={control}
        errors={errors}
        type='email'
        name='email'
        label='E-mail:'
        $themeColor='green'
      />
      <Field
        control={control}
        errors={errors}
        type='text'
        name='cpf'
        label='CPF:'
        $themeColor='green'
        onChange={({ target: { value } }) => {
          setValue('cpf', formatCPF(value));
          if (!validateCPF(value)) {
            setError('cpf', {
              message: 'O CPF deve ser válido'
            });
          } else {
            clearErrors('cpf');
          }
        }}
      />
    </>
  );
};

export default DonationPersonalDataFields;
