import { type ReactNode } from 'react';

import * as S from './styles';

export type CategoriesOptions =
  | 'Apoio aos Idosos'
  | 'Artes e Cultura'
  | 'Direitos Humanos'
  | 'Educação'
  | 'Esportes'
  | 'Meio Ambiente'
  | 'Proteção aos Animais'
  | 'Saúde'
  | 'Tecnologia e Inovação Social';

export interface Categories {
  label: CategoriesOptions;
  icon: ReactNode;
}

export const categories: Categories[] = [
  // {
  //   label: 'Apoio aos Idosos',
  //   icon: <S.SupportForElderlyIcon />
  // },
  {
    label: 'Artes e Cultura',
    icon: <S.ArtsAndCultureIcon />
  },
  // {
  //   label: 'Direitos Humanos',
  //   icon: <S.HumanRightsIcon />
  // },
  {
    label: 'Educação',
    icon: <S.EducationIcon />
  },
  // {
  //   label: 'Esportes',
  //   icon: <S.SportsIcon />
  // },
  {
    label: 'Meio Ambiente',
    icon: <S.EnvironmentIcon />
  },
  {
    label: 'Proteção aos Animais',
    icon: <S.AnimalProtectionIcon />
  },
  {
    label: 'Saúde',
    icon: <S.HealthIcon />
  },
  // {
  //   label: 'Tecnologia e Inovação Social',
  //   icon: <S.TechnologyAndInovationIcon />
  // }
];
