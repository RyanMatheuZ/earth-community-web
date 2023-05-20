import type { IMediaItems } from '@ts/interfaces';

import { GroupIcon, DonateIcon, BlogIcon } from './styles';

export const navItems: ReadonlyArray<IMediaItems> = [
  {
    icon: <GroupIcon />,
    label: 'Grupos',
    path: '/groups',
    target: '_self'
  },
  {
    icon: <DonateIcon />,
    label: 'Doação',
    path: '/donate-now',
    target: '_self'
  },
  {
    icon: <BlogIcon />,
    label: 'Blog',
    path: '/blog',
    target: '_self'
  }
];
