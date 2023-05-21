import { type FC } from 'react';

import { SearchBar } from '@components/elements';
import { FeedNavigationItems } from '@components/modules';

import { Container } from './styles';

interface DrawerProps {
  isOpenDrawer: boolean;
  onClose: () => void;
}

const Drawer: FC<DrawerProps> = ({ isOpenDrawer, onClose }) => {
  return (
    <Container
      open={isOpenDrawer}
      onClose={onClose}
    >
      <SearchBar />
      <FeedNavigationItems />
    </Container>
  );
};

export default Drawer;
