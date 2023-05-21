import { type FC } from 'react';

import * as S from './styles';

const QRCodeSkeleton: FC = () => {
  return (
    <>
      <S.QRCode />
      <S.QRCodeDescription />
      <S.QRCodeInput />
    </>
  );
};

export default QRCodeSkeleton;
