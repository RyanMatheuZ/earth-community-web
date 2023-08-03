import { type FC } from 'react';

import { type FieldErrors } from 'react-hook-form';

import type { ITheme } from '@ts/interfaces';

import * as S from './styles';

interface ErrorMessageProps extends ITheme {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: FieldErrors<any>;
  name: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ errors, name, $themeColor }) => {
  return (
    <>
      {errors[name] && (
        <S.Container $themeColor={$themeColor}>
          <S.ErrorIcon $themeColor={$themeColor} />
          {errors[name]?.message as string}
        </S.Container>
      )}
    </>
  );
};

export default ErrorMessage;
