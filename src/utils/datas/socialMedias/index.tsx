import type { IMediaItems } from '@ts/interfaces';

import { FacebookIcon, InstagramIcon, LinkedInIcon } from './styles';

export const socialMedias: ReadonlyArray<IMediaItems> = [
  {
    icon: <FacebookIcon />,
    label: 'Facebook',
    path: 'https://www.facebook.com/',
    target: '_blank'
  },
  {
    icon: <InstagramIcon />,
    label: 'Instagram',
    path: 'https://www.instagram.com/',
    target: '_blank'
  },
  {
    icon: <LinkedInIcon />,
    label: 'LinkedIn',
    path: 'https://www.linkedin.com/',
    target: '_blank'
  }
];
