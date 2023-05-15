import type { IMediaItems } from '@ts/interfaces';

import { EmailIcon, PhoneIcon, LocationIcon } from './styles';

export const contacts: ReadonlyArray<Pick<IMediaItems, 'icon' | 'label'> & { value: string }> = [
  {
    icon: <EmailIcon />,
    label: 'Email',
    value: 'office@earthcommunity.com'
  },
  {
    icon: <PhoneIcon />,
    label: 'Telefone',
    value: '(16) 2152-3024'
  },
  {
    icon: <LocationIcon />,
    label: 'Localização',
    value: 'Matão, SP, Brasil'
  }
];
