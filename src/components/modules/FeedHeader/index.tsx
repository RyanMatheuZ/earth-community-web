import { type FC } from 'react';

import { Logo, SearchBar, UserPictureProfile } from '@components/elements';

import { Container, MaxWidthContainer, LogoAndSearchBar } from './styles';

const FeedHeader: FC = () => {
  return (
    <Container>
      <MaxWidthContainer>
        <LogoAndSearchBar>
          <Logo
            showOnlyImage
            $themeColor='green'
            width='50'
            height='50'
          />
          <SearchBar />
        </LogoAndSearchBar>
        <UserPictureProfile userName='Ryan' />
      </MaxWidthContainer>
    </Container>
  );
};

export default FeedHeader;
