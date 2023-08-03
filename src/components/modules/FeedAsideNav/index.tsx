import { type FC } from 'react';

import { FeedNavigationItems } from '@components/modules';

import * as S from './styles';

const FeedAsideNav: FC = () => {
  return (
    <S.Container>
      <FeedNavigationItems />
    </S.Container>
  );
};

export default FeedAsideNav;
