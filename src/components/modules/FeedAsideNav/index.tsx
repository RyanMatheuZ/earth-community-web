import { type FC } from 'react';

import { navItems } from './utils';

import { Container, Navigation, StyledLink } from './styles';

const FeedAsideNav: FC = () => {
  return (
    <Container>
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

export default FeedAsideNav;
