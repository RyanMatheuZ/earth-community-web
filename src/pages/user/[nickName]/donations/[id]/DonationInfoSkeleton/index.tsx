import { type FC } from 'react';

import * as S from './styles';

const DonationInfoSkeleton: FC = () => {
  return (
    <S.Container>
      <S.StatusSkeleton />
      <S.LabelsSkeleton />
      <S.LabelsSkeleton />
    </S.Container>
  );
};

export default DonationInfoSkeleton;
