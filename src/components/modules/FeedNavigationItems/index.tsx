import { type FC } from 'react';

import { UserDataPreview } from '@components/modules';

import { navItems } from './utils';

import { Container, Navigation, StyledLink } from './styles';

const FeedNavigationItems: FC = () => {
  return (
    <Container>
      <UserDataPreview />
      <Navigation>
        {navItems.map(({ label, icon, path, target }, index) => (
          <StyledLink
            key={`nav-item-${label}-${index}`}
            href={path}
            target={target}
          >
            {icon} {label}
          </StyledLink>
        ))}
      </Navigation>
    </Container>
  );
};

export default FeedNavigationItems;
