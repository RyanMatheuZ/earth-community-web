import { type FC, type PropsWithChildren } from 'react';

import type { ITheme } from '@ts/interfaces';

import * as S from './styles';

type FormSectionProps = PropsWithChildren & ITheme;

const FormSection: FC<FormSectionProps> = ({ children, $themeColor }) => {
  return (
    <S.Container $themeColor={$themeColor} >
      {children}
    </S.Container >
  );
};

export default FormSection;
