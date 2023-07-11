import { type FC } from 'react';

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
          <S.StyledLink href={path}>
            {label}
          </S.StyledLink>
        </S.ListText>
      ))}
    </ul>
  );
};

export default SiteMap;
