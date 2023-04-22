import { type FC } from 'react';

import { Logo, RedirectLinkForDonation } from '@components/elements';

import Drawer from './Drawer';
import Dropdown from './Dropdown';

import { Container, ElementsOnTheRight } from './styles';

const WelcomeHeader: FC = () => {
  return (
    <header>
      <Container>
        <Logo />
        <ElementsOnTheRight>
          <RedirectLinkForDonation />
          <Dropdown />
        </ElementsOnTheRight>
      </Container>
      <Drawer />
    </header>
  );
};

export default WelcomeHeader;
