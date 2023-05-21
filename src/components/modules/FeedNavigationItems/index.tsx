import { type FC } from 'react';

import { UserDataPreview } from '@components/modules';

import { navItems } from './utils';

import * as S from './styles';

const FeedNavigationItems: FC = () => {
  return (
    <S.Container>
      <UserDataPreview />
      <S.Navigation>
        {navItems.map(({ label, icon, path, target }, index) => (
          <S.StyledLink
            key={`nav-item-${label}-${index}`}
            href={path}
            target={target}
          >
            {icon} {label}
          </S.StyledLink>
        ))}
      </S.Navigation>
    </S.Container>
  );
};

export default FeedNavigationItems;
