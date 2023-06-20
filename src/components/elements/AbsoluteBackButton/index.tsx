import { type FC } from 'react';

import { useRouter } from 'next/router';

import type { ITheme } from '@ts/interfaces';

import { BackIcon } from '@components/elements';

import * as S from './styles';

const AbsoluteBackButton: FC<ITheme> = ({ $themeColor }) => {
  const { back } = useRouter();

  return (
    <S.Container
      onClick={back}
      $themeColor={$themeColor}
    >
      <BackIcon $themeColor={$themeColor} />
    </S.Container>
  );
};

export default AbsoluteBackButton;
