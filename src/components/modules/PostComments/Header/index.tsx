import { type FC } from 'react';

import * as S from './styles';

interface HeaderProps {
  authorPost: string;
}

const Header: FC<HeaderProps> = ({ authorPost }) => {
  return (
    <S.Container>
      Publicação de {authorPost}
    </S.Container>
  );
};

export default Header;
