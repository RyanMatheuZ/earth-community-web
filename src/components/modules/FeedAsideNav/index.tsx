import { type FC } from 'react';

import { FeedNavigationItems } from '@components/modules';

import { Container } from './styles';

const FeedAsideNav: FC = () => {
  return (
    <Container>
      <FeedNavigationItems />
    </Container>
  );
};

export default FeedAsideNav;
