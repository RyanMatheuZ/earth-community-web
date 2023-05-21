import { type FC } from 'react';

import LogoAndSocialMedias from './LogoAndSocialMedias';
import Contacts from './Contacts';

import * as S from './styles';

const Footer: FC = () => {
  return (
    <S.StyledFooter>
      <S.Container>
        <LogoAndSocialMedias />
        <Contacts />
      </S.Container>
    </S.StyledFooter>
  );
};

export default Footer;
