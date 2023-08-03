/* eslint-disable @typescript-eslint/no-explicit-any */
import { type FC } from 'react';

import { Controller, type Control, type FieldErrors } from 'react-hook-form';

import { type TextFieldProps } from '@mui/material';

import type { ITheme } from '@ts/interfaces';

import { StyledTextField, ErrorMessage } from '@components/elements';

import * as S from './styles';

type FieldProps = TextFieldProps & {
  control: Control<any, any>;
  errors: FieldErrors<any>
} & ITheme

const Field: FC<FieldProps> = ({
  control,
  errors,
  name = '',
  variant = 'outlined',
  $themeColor = 'green',
  ...props
}) => {
  return (
    <S.Container>
      <Controller
        name={name}
        control={control}
        render={
          ({ field, fieldState: { error } }) => (
            <StyledTextField
              {...field}
              {...props}
              fullWidth
              variant={variant}
              error={!!error}
              margin='dense'
              $themeColor={$themeColor}
            />
          )
        }
      />
      <ErrorMessage
        $themeColor={$themeColor}
        errors={errors}
        name={name}
      />
    </S.Container>
  );
};

export default Field;
