import { type HTMLAttributeAnchorTarget } from 'react';

import { AboutIcon, FacebookIcon, InstagramIcon, LinkedInIcon } from './Dropdown/styles';

interface DropdownItems {
  icon: JSX.Element;
  label: string;
  path: string;
  target: HTMLAttributeAnchorTarget;
}

export const dropdownItems: DropdownItems[] = [
  {
    icon: <AboutIcon />,
    label: 'Sobre',
    path: '/about',
    target: '_self'
  },
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
