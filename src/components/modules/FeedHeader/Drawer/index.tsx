import { type FC } from 'react';

import { SearchBar } from '@components/elements';
import { FeedNavigationItems } from '@components/modules';

import * as S from './styles';

interface DrawerProps {
  isOpenDrawer: boolean;
  onClose: () => void;
}

const Drawer: FC<DrawerProps> = ({ isOpenDrawer, onClose }) => {
  return (
    <S.Container
      open={isOpenDrawer}
      onClose={onClose}
    >
      <SearchBar />
      <FeedNavigationItems />
    </S.Container>
  );
};

export default Drawer;
