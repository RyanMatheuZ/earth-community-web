import { type FC } from 'react';

import * as S from './styles';

const QRCodeSkeleton: FC = () => {
  return (
    <S.Container>
      <S.QRCode />
      <S.QRCodeDescription />
      <S.QRCodeInput />
    </S.Container>
  );
};

export default QRCodeSkeleton;
