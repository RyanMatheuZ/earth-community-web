import { type FC } from 'react';

import * as S from './styles';

const UserNameSkeleton: FC = () => {
  return (
    <S.Container>
      <S.TextSkeleton /> <S.TextSkeleton />
    </S.Container>
  );
};

export default UserNameSkeleton;
