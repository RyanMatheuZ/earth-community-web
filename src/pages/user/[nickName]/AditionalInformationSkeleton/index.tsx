import { type FC } from 'react';

import * as S from './styles';

const AditionalInformationSkeleton: FC = () => {
  return (
    <S.Container>
      <S.IconSkeleton /> <S.TextSkeleton />
    </S.Container>
  );
};

export default AditionalInformationSkeleton;
