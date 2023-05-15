import { type FC } from 'react';

import { socialMedias } from '@utils/datas/socialMedias';

import { phrases } from './utils';

import { SocialMediaContainer } from './styles';
import { ListTitle, ListText } from '../styles';

const LogoAndSocialMedias: FC = () => {
  return (
    <ul>
      <li>
        <ListTitle>
          Earth Community
        </ListTitle>
      </li>
      <li>
        {phrases.map((phrase, index) => (
          <ListText key={`phrase-${index}`}>
            {phrase}
          </ListText>
        ))}
      </li>
      <li>
        {socialMedias.map(({ label, icon, path, target }, index) => (
          <SocialMediaContainer
            key={`social-media-${label}-${index}`}
            href={path}
            target={target}
            title={label}
          >
            {icon}
          </SocialMediaContainer>
        ))}
      </li>
    </ul>
  );
};

export default LogoAndSocialMedias;
