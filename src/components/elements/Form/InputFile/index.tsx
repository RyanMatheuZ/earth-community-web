import { type FC, type ReactNode } from 'react';

import { type UseFormRegister } from 'react-hook-form';

import * as S from './styles';

interface InputFileProps {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  label: string | ReactNode;
}

const InputFile: FC<InputFileProps> = ({ name, register, label }) => {
  return (
    <>
      <S.Label htmlFor={name}>
        {label}
      </S.Label>
      <S.Input
        id={name}
        type='file'
        {...register(name)}
      />
    </>
  );
};

export default InputFile;
