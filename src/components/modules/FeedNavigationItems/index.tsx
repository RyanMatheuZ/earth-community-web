import { type FC } from 'react';

import { LogoutButton } from '@components/elements';
import { UserDataPreview } from '@components/modules';

import { navItems } from './utils';

import * as S from './styles';

const FeedNavigationItems: FC = () => {
  return (
    <S.Container>
      <UserDataPreview />
      <S.Navigation>
        <S.LinksContainer>
          {navItems.map(({ label, icon, path, target }, index) => (
            <S.StyledLink
              key={`nav-item-${label}-${index}`}
              href={path}
              target={target}
            >
              {icon} {label}
            </S.StyledLink>
          ))}
        </S.LinksContainer>
        <LogoutButton />
      </S.Navigation>
    </S.Container>
  );
};

export default FeedNavigationItems;
