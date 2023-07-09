import { type FC } from 'react';

import LogoAndSocialMedias from './LogoAndSocialMedias';
import Contacts from './Contacts';
import SiteMap from './SiteMap';

import * as S from './styles';

const Footer: FC = () => {
  return (
    <S.StyledFooter id='footer'>
      <S.Container>
        <LogoAndSocialMedias />
        <SiteMap />
        <Contacts />
      </S.Container>
    </S.StyledFooter>
  );
};

export default Footer;
