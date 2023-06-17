import type { IMediaItems } from '@ts/interfaces';

import * as S from './styles';

export const contacts: ReadonlyArray<Pick<IMediaItems, 'icon' | 'label'> & { value: string }> = [
  {
    icon: <S.EmailIcon />,
    label: 'Email',
    value: 'ec.contato@outlook.com.br'
  },
  {
    icon: <S.LocationIcon />,
    label: 'Localização',
    value: 'São Paulo, Brasil'
  }
];
