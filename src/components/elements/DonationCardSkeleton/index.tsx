import { type FC } from 'react';

import * as S from './styles';

interface DonationCardSkeletonProps {
  length: number;
}

const DonationCardSkeleton: FC<DonationCardSkeletonProps> = ({ length }) => {
  return (
    <>
      {Array.from({ length }).map((_, index) => (
        <S.Container key={`donation-card-skeleton-${index}`} />
      ))}
    </>
  );
};

export default DonationCardSkeleton;
