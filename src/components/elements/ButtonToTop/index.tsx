import { useState, useEffect, type FC } from 'react';

import { useRouter } from 'next/router';

import { Slide } from '@mui/material';

import * as S from './styles';

const ButtonToTop: FC = () => {
  const { push, pathname } = useRouter();

  const [scrollYPosition, setScrollYPosition] = useState(0);

  const handleClickButton = () => {
    scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    push(pathname, undefined, { shallow: true });
  };

  const handleScroll = () => {
    setScrollYPosition(scrollY);
  };

  useEffect(() => {
    addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Slide
      in={scrollYPosition > 199}
      direction='up'
      mountOnEnter
      unmountOnExit
    >
      <S.Container
        title='Voltar ao topo'
        onClick={handleClickButton}
      >
        <S.ArrowIcon />
      </S.Container>
    </Slide>
  );
};

export default ButtonToTop;
