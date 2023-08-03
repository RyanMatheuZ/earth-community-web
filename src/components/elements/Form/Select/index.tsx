/* eslint-disable @typescript-eslint/no-explicit-any */
import { type FC } from 'react';

import { Controller, type Control, type FieldErrors } from 'react-hook-form';

import { type TextFieldProps } from '@mui/material';

import type { ITheme } from '@ts/interfaces';

import { ErrorMessage } from '@components/elements';

import * as S from './styles';

type SelectProps = TextFieldProps & {
  control: Control<any, any>;
  errors: FieldErrors<any>
} & ITheme

const Select: FC<SelectProps> = ({
  control,
  errors,
  name = '',
  variant = 'outlined',
  label,
  $themeColor,
  children,
  ...props
}) => {
  return (
    <S.Container>
      <Controller
        name={name}
        control={control}
        render={
          ({ field, fieldState: { error } }) => (
            <S.StyledSelectTextField
              {...field}
              {...props}
              select
              fullWidth
              variant={variant}
              label={label}
              error={!!error}
              margin='dense'
              $themeColor={$themeColor}
            >
              {children}
            </S.StyledSelectTextField>
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

export default Select;
