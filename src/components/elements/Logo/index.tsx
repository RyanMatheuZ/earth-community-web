import { type FC } from 'react';

import Image from 'next/image';

import { Container, Title } from './styles';

interface LogoProps {
  showOnlyImage?: boolean;
}

const Logo: FC<LogoProps> = ({ showOnlyImage = false }) => {
  const textLogo = 'Earth Community';

  return (
    <Container>
      <Image
        src='/medias/logo.svg'
        alt={textLogo}
        title={textLogo}
        width='60'
        height='60'
        draggable={false}
      />
      {!showOnlyImage && (
        <Title>
          {textLogo}
        </Title>
      )}
    </Container>
  );
};

export default Logo;
