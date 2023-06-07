import { type FC } from 'react';

import * as S from './styles';

const AboutSectionSkeleton: FC = () => {
  return (
    <S.Container>
      <S.Title />
      <S.TextContainer>
        <S.Text width={400} />
        <S.Text width={200} />
        <S.Text width={120} />
        <S.Text width={280} />
        <S.Text width={400} />
        <S.Text width={50} />
      </S.TextContainer>
      <S.TextContainer>
        <S.Text width={200} />
        <S.Text width={100} />
        <S.Text width={60} />
        <S.Text width={140} />
        <S.Text width={200} />
        <S.Text width={150} />
        <S.Text width={300} />
        <S.Text width={100} />
      </S.TextContainer>
      <S.TextContainer>
        <S.Text width={100} />
        <S.Text width={50} />
        <S.Text width={30} />
        <S.Text width={70} />
        <S.Text width={100} />
        <S.Text width={75} />
        <S.Text width={150} />
        <S.Text width={300} />
        <S.Text width={100} />
      </S.TextContainer>
    </S.Container>
  );
};

export default AboutSectionSkeleton;
