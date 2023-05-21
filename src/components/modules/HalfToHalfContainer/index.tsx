import { type FC, type PropsWithChildren } from 'react';

import * as S from './styles';

const HalfToHalfContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <S.Container>
      {children}
    </S.Container>
  );
};

export default HalfToHalfContainer;
