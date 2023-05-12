/* eslint-disable @typescript-eslint/no-explicit-any */
import { type FC, type PropsWithChildren } from 'react';

import { RadioGroup, type RadioProps } from '@mui/material';

import { Controller, type Control } from 'react-hook-form';

type RadioButtonProps = RadioProps & PropsWithChildren & {
  control: Control<any, any>;
}

const RadioButton: FC<RadioButtonProps> = ({
  control,
  name = '',
  children
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <RadioGroup {...field}>
          {children}
        </RadioGroup>
      )}
    />
  );
};

export default RadioButton;
