import { type FC } from 'react';

import * as S from './styles';

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <S.Container>
      {title}
    </S.Container>
  );
};

export default Header;
