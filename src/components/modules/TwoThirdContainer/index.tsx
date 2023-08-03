import { type FC, type PropsWithChildren } from 'react';

import * as S from './styles';

const TwoThirdContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <S.Container>
      {children}
    </S.Container>
  );
};

export default TwoThirdContainer;
