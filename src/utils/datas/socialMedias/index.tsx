import type { IMediaItems } from '@ts/interfaces';

import * as S from './styles';

export const socialMedias: ReadonlyArray<IMediaItems> = [
  {
    icon: <S.FacebookIcon />,
    label: 'Facebook',
    path: 'https://www.facebook.com/earth.community.br',
    target: '_blank'
  },
  {
    icon: <S.InstagramIcon />,
    label: 'Instagram',
    path: 'https://www.instagram.com/earth.community.br',
    target: '_blank'
  },
  {
    icon: <S.LinkedInIcon />,
    label: 'LinkedIn',
    path: 'https://www.linkedin.com/company/earth-community-br',
    target: '_blank'
  }
];
