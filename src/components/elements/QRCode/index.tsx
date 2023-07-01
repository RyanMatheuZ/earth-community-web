import { type FC } from 'react';

import { InputAdornment } from '@mui/material';

import { QRCodeSkeleton, StyledTextField } from '@components/elements';

import { copyToClipboard } from '@utils/inputs/copyToClipboard';

import * as S from './styles';

interface QRCodeProps {
  src: string;
  description: string;
  transactionCode: string;
  isLoading: boolean;
}

const QRCode: FC<QRCodeProps> = ({ src, description, transactionCode, isLoading }) => {
  return (
    <>
      {isLoading && <QRCodeSkeleton />}
      {!isLoading && (
        <S.Container>
          <S.QRCode
            src={src}
            alt={description}
            title={description}
            width={200}
            height={200}
            draggable={false}
          />
          <S.QRCodeDescription>
            {description}
          </S.QRCodeDescription>
          <StyledTextField
            defaultValue={transactionCode}
            $themeColor='green'
            InputProps={{
              readOnly: true,
              endAdornment: <InputAdornment position='end'>
                <S.CopyIcon onClick={() => copyToClipboard(transactionCode, 'Código copiado com sucesso!')} />
              </InputAdornment>
            }}
          />
        </S.Container>
      )}
    </>
  );
};

export default QRCode;
