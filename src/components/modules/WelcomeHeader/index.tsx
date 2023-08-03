import { type FC } from 'react';

import { Logo, RedirectLinkForDonation } from '@components/elements';

import Drawer from './Drawer';
import Dropdown from './Dropdown';

import * as S from './styles';

const WelcomeHeader: FC = () => {
  return (
    <header>
      <S.Container>
        <Logo $themeColor='green' />
        <S.ElementsOnTheRight>
          <RedirectLinkForDonation />
          <Dropdown />
        </S.ElementsOnTheRight>
      </S.Container>
      <Drawer />
    </header>
  );
};

export default WelcomeHeader;
