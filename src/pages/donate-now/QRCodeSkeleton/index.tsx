import { type FC } from 'react';

import { QRCode, QRCodeDescription, QRCodeInput } from './styles';

const QRCodeSkeleton: FC = () => {
  return (
    <>
      <QRCode />
      <QRCodeDescription />
      <QRCodeInput />
    </>
  );
};

export default QRCodeSkeleton;
