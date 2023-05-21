import { type ReactElement } from 'react';

import { type StepIconProps } from '@mui/material';
import { Receipt, SupervisedUserCircle, Home, VolunteerActivism } from '@mui/icons-material';

import { useFormContext } from 'react-hook-form';

import * as S from './styles';

import { giverDefaultValues, type GiverDefaultValues } from '../utils';

type AllowedFieldsType = keyof typeof giverDefaultValues;

export const steps = [
  {
    label: 'Dados da Doação',
    icon: <Receipt />
  },
  {
    label: 'Dados Pessoais',
    icon: <SupervisedUserCircle />
  },
  {
    label: 'Dados de Endereço',
    icon: <Home />
  },
  {
    label: 'Doação',
    icon: <VolunteerActivism />
  }
];

export const isFormFieldsFilledCorrectly = (values: AllowedFieldsType[]) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { getValues, formState: { errors } } = useFormContext<GiverDefaultValues>();

  const fieldValues: Array<string | number> = [];
  const fieldErrors: Array<string | undefined> = [];

  values.map((value) => {
    fieldValues.push(getValues(value));
    fieldErrors.push(errors[value]?.message);
  });

  return fieldValues.every((value) => !!value) && fieldErrors.every((value) => !value);
};

export const resolveStepIcon = ({ active, className, icon }: StepIconProps) => {
  const icons: { [index: string]: ReactElement } = {
    1: steps[0].icon,
    2: steps[1].icon,
    3: steps[2].icon,
    4: steps[3].icon
  };

  return (
    <S.StepIconRoot
      ownerState={{ active }}
      className={className}
    >
      {icons[Number(icon)]}
    </S.StepIconRoot>
  );
};
