import type { IMediaItems } from '@ts/interfaces';

import { socialMedias } from '@utils/datas/socialMedias';

import { AboutIcon } from './styles';

export const dropdownItems: ReadonlyArray<IMediaItems> = [
  {
    icon: <AboutIcon />,
    label: 'Sobre',
    path: '/about',
    target: '_self'
  },
  ...socialMedias
];
