import { type FC } from 'react';

import LogoAndSocialMedias from './LogoAndSocialMedias';
import Contacts from './Contacts';

import { StyledFooter, Container } from './styles';

const Footer: FC = () => {
  return (
    <StyledFooter>
      <Container>
        <LogoAndSocialMedias />
        <Contacts />
      </Container>
    </StyledFooter>
  );
};

export default Footer;
