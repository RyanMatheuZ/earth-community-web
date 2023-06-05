/* eslint-disable @typescript-eslint/no-explicit-any */
import { type FC } from 'react';

import { Controller, type Control, type FieldErrors } from 'react-hook-form';

import { LocalizationProvider, type DateFieldProps } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import type { ITheme } from '@ts/interfaces';

import { ErrorMessage } from '@components/elements';

import * as S from './styles';

type InputDateProps = DateFieldProps<any> & {
  control: Control<any, any>;
  errors: FieldErrors<any>;
} & ITheme

const InputDate: FC<InputDateProps> = ({
  control,
  errors,
  name = '',
  label,
  required = false,
  fullWidth = false,
  $themeColor,
  ...props
}) => {
  return (
    <S.Container>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <S.DateField
              {...props}
              {...field}
              id={name}
              label={label}
              required={required}
              fullWidth={fullWidth}
              format='dd/MM/yyyy'
              $themeColor={$themeColor}
            />
          </LocalizationProvider>
        )}
      />
      <ErrorMessage
        $themeColor={$themeColor}
        errors={errors}
        name={name}
      />
    </S.Container>
  );
};

export default InputDate;
