import { useState, type FC } from 'react';

import { useAuth } from '@context/auth';

import { Logo, SearchBar, UserPictureProfile } from '@components/elements';

import Drawer from './Drawer';

import {
  Container,
  MaxWidthContainer,
  SearchBarContainer,
  GroupElements,
  IconContainer,
  MenuIcon,
} from './styles';

const FeedHeader: FC = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const { user } = useAuth();

  const userName = `${user?.info.firstName} ${user?.info.surname}`;

  const handleToggleDrawer = () => {
    setIsOpenDrawer((prevState) => !prevState);
  };

  return (
    <>
      <Container>
        <MaxWidthContainer>
          <GroupElements>
            <Logo
              showOnlyImage
              $themeColor='green'
              width='50'
              height='50'
            />
            <SearchBarContainer>
              <SearchBar />
            </SearchBarContainer>
          </GroupElements>
          <IconContainer onClick={handleToggleDrawer}>
            <MenuIcon />
          </IconContainer>
          <GroupElements>
            <UserPictureProfile userName={userName} />
          </GroupElements>
        </MaxWidthContainer>
      </Container>
      <Drawer
        isOpenDrawer={isOpenDrawer}
        onClose={handleToggleDrawer}
      />
    </>
  );
};

export default FeedHeader;
