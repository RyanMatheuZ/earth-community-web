import { useState, type FC } from 'react';

import { useAuth } from '@context/auth';

import { Logo, SearchBar, UserPictureProfile } from '@components/elements';

import Drawer from './Drawer';
import Shortcuts from './Shortcut';

import * as S from './styles';

const FeedHeader: FC = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [isOpenShortscutMenu, setIsOpenShortscutMenu] = useState(false);

  const { user } = useAuth();

  const userName = `${user?.info.firstName} ${user?.info.surname}`;

  const handleToggleDrawer = () => {
    setIsOpenDrawer((prevState) => !prevState);
  };

  const handleToggleMenu = () => {
    setIsOpenShortscutMenu((prevState) => !prevState);
  };

  return (
    <>
      <S.Container>
        <S.MaxWidthContainer>
          <S.GroupElements>
            <Logo
              showOnlyImage
              $themeColor='green'
              width='50'
              height='50'
            />
            <S.SearchBarContainer>
              <SearchBar />
            </S.SearchBarContainer>
          </S.GroupElements>
          <S.IconContainer onClick={handleToggleDrawer}>
            <S.MenuIcon />
          </S.IconContainer>
          <S.GroupElements>
            <UserPictureProfile
              pictureProfileSRC={user?.info.pictureProfile}
              userName={userName}
              handleClick={handleToggleMenu}
            />
            <Shortcuts
              isOpenMenu={isOpenShortscutMenu}
              handleToggleMenu={handleToggleMenu}
            />
          </S.GroupElements>
        </S.MaxWidthContainer>
      </S.Container>
      <Drawer
        isOpenDrawer={isOpenDrawer}
        onClose={handleToggleDrawer}
      />
    </>
  );
};

export default FeedHeader;
