import type { IMediaItems } from '@ts/interfaces';

import * as S from './styles';

export const navItems: ReadonlyArray<IMediaItems> = [
  {
    icon: <S.GroupIcon />,
    label: 'Grupos',
    path: '/groups',
    target: '_self'
  },
  {
    icon: <S.DonateIcon />,
    label: 'Doar',
    path: '/donate-now',
    target: '_self'
  },
  {
    icon: <S.BlogIcon />,
    label: 'Blog',
    path: '/blog',
    target: '_self'
  }
];
