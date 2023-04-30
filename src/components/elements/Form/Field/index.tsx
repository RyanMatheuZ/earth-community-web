/* eslint-disable @typescript-eslint/no-explicit-any */
import { type FC } from 'react';

import { Controller, type Control, type FieldErrors } from 'react-hook-form';

import { type TextFieldProps } from '@mui/material';

import type { ITheme } from '@ts/interfaces';

import { Container, StyledTextField, ErrorIcon, ErrorMessage } from './styles';

type FieldProps = TextFieldProps & {
  control: Control<any, any>;
  errors: FieldErrors<any>
} & ITheme

const Field: FC<FieldProps> = ({
  control,
  errors,
  name = '',
  variant = 'outlined',
  $themeColor,
  ...props
}) => {
  return (
    <Container>
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
      {errors?.[name] && (
        <ErrorMessage $themeColor={$themeColor}>
          <ErrorIcon $themeColor={$themeColor} />
          {errors[name]?.message as string}
        </ErrorMessage>
      )}
    </Container>
  );
};

export default Field;
