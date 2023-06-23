import { type FC } from 'react';

import { socialMedias } from '@utils/datas/socialMedias';

import { phrases } from './utils';

import * as S from './styles';
import * as FooterS from '../styles';

const LogoAndSocialMedias: FC = () => {
  return (
    <ul>
      <li>
        <FooterS.ListTitle>
          Earth Community
        </FooterS.ListTitle>
      </li>
      <li>
        {phrases.map((phrase, index) => (
          <FooterS.ListText key={`phrase-${index}`}>
            {phrase}
          </FooterS.ListText>
        ))}
      </li>
      <li>
        {socialMedias.map(({ label, icon, path, target }, index) => (
          <S.SocialMediaContainer
            key={`social-media-${label}-${index}`}
            href={path}
            target={target}
            title={label}
          >
            {icon}
          </S.SocialMediaContainer>
        ))}
      </li>
    </ul>
  );
};

export default LogoAndSocialMedias;
