import { type FC } from 'react';

import * as S from './styles';

const GroupDescriptionSkeleton: FC = () => {
  return (
    <S.Container>
      <S.Text width={200} />
      <S.Text width={150} />
      <S.Text width={100} />
      <S.Text width={250} />
      <S.Text width={300} />
      <S.Text width={200} />
      <S.Text width={200} />
      <S.Text width={200} />
      <S.Text width={100} />
      <S.Text width={100} />
      <S.Text width={200} />
      <S.Text width={200} />
      <S.Text width={100} />
      <S.Text width={100} />
    </S.Container>
  );
};

export default GroupDescriptionSkeleton;
