import { type FC, type PropsWithChildren } from 'react';

import type { ITheme } from '@ts/interfaces';

import { Container } from './styles';

type FormSectionProps = PropsWithChildren & ITheme;

const FormSection: FC<FormSectionProps> = ({ children, $themeColor }) => {
  return (
    <Container $themeColor={$themeColor} >
      {children}
    </Container >
  );
};

export default FormSection;
