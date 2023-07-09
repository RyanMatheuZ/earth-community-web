import { type FC } from 'react';

import Link from 'next/link';

import { siteMapItems } from './utils';

import * as S from '../styles';

const SiteMap: FC = () => {
  return (
    <ul>
      <li>
        <S.ListTitle>
          Mapa do Site
        </S.ListTitle>
      </li>
      {siteMapItems.map(({ label, path }, index) => (
        <S.ListText key={`site-map-item-${index}`}>
          <Link href={path}>
            {label}
          </Link>
        </S.ListText>
      ))}
    </ul>
  );
};

export default SiteMap;
