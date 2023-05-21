import type { IMediaItems } from '@ts/interfaces';

import * as S from './styles';

export const contacts: ReadonlyArray<Pick<IMediaItems, 'icon' | 'label'> & { value: string }> = [
  {
    icon: <S.EmailIcon />,
    label: 'Email',
    value: 'office@earthcommunity.com'
  },
  {
    icon: <S.PhoneIcon />,
    label: 'Telefone',
    value: '(16) 2152-3024'
  },
  {
    icon: <S.LocationIcon />,
    label: 'Localização',
    value: 'Matão, SP, Brasil'
  }
];
