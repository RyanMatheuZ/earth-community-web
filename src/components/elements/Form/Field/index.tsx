/* eslint-disable @typescript-eslint/no-explicit-any */
import { type FC } from 'react';

import { Controller, type Control, type FieldErrors } from 'react-hook-form';

import { type TextFieldProps } from '@mui/material';

import { Container, StyledTextField, ErrorIcon, ErrorMessage } from './styles';

type FieldProps = TextFieldProps & {
  control: Control<any, any>;
  errors: FieldErrors<any>
}

const Field: FC<FieldProps> = ({
  control,
  errors,
  name = '',
  variant = 'outlined',
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
              fullWidth
              variant={variant}
              error={!!error}
              margin='dense'
              {...field}
              {...props}
            />
          )
        }
      />
      {errors?.[name] && (
        <ErrorMessage>
          <ErrorIcon />
          {errors[name]?.message as string}
        </ErrorMessage>
      )}
    </Container>
  );
};

export default Field;
