import { type FC } from 'react';

import type { ITheme } from '@ts/interfaces';

import { AuthOptionsButton } from '@components/elements';

import * as S from './styles';

const AnotherAuthOption: FC<ITheme> = ({ $themeColor }) => {
  return (
    <>
      <S.Container>
        <S.StyledDivider $themeColor={$themeColor} />
        <S.Text $themeColor={$themeColor}>
          Ou entre com
        </S.Text>
        <S.StyledDivider $themeColor={$themeColor} />
      </S.Container >
      <AuthOptionsButton />
    </>
  );
};

export default AnotherAuthOption;
