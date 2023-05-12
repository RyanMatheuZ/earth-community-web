import { type FC } from 'react';

import { type FieldErrors } from 'react-hook-form';

import type { ITheme } from '@ts/interfaces';

import { Container, ErrorIcon } from './styles';

interface ErrorMessageProps extends ITheme {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: FieldErrors<any>;
  name: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ errors, name, $themeColor }) => {
  return (
    <>
      {errors[name] && (
        <Container $themeColor={$themeColor}>
          <ErrorIcon $themeColor={$themeColor} />
          {errors[name]?.message as string}
        </Container>
      )}
    </>
  );
};

export default ErrorMessage;
