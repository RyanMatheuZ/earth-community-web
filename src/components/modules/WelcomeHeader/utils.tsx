import type { IMediaItems } from '@ts/interfaces';

import { socialMedias } from '@utils/datas/socialMedias';

import * as S from './styles';

export const dropdownItems: ReadonlyArray<IMediaItems> = [
  {
    icon: <S.AboutIcon />,
    label: 'Sobre',
    path: '/about',
    target: '_self'
  },
  {
    icon: <S.SignInIcon />,
    label: 'Entrar',
    path: '/sign-in',
    target: '_self'
  },
  {
    icon: <S.SignUpIcon />,
    label: 'Cadastrar-se',
    path: '/sign-up',
    target: '_self'
  },
  ...socialMedias
];
