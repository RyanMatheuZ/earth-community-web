import { type FC } from 'react';

import type { IDonation } from '@ts/interfaces';

import { InputAdornment } from '@mui/material';

import { copyToClipboard } from '@utils/inputs/copyToClipboard';

import QRCodeSkeleton from '../QRCodeSkeleton';

import * as S from './styles';
import * as DonateS from '../styles';

interface DonationFinalStepProps {
  donation?: IDonation;
  isLoadingDonation: boolean;
}

const DonationFinalStep: FC<DonationFinalStepProps> = ({ donation, isLoadingDonation }) => {
  const donationDescription = donation?.description as string;
  const sourceImage = `data:image/jpeg;base64, ${donation?.point_of_interaction.transaction_data.qr_code_base64}`;
  const qrCode = donation?.point_of_interaction.transaction_data.qr_code as string;

  return (
    <>
      <DonateS.StepDescription>
        <DonateS.StepHighlightedText>Identificação concluída!</DonateS.StepHighlightedText> <br />
        Agora você pode realizar <br /> sua doação.
      </DonateS.StepDescription>
      {isLoadingDonation && (
        <QRCodeSkeleton />
      )}
      {!isLoadingDonation && (
        <S.Container>
          <S.QRCode
            src={sourceImage}
            alt={donationDescription}
            title={donationDescription}
            width={200}
            height={200}
            draggable={false}
          />
          <S.QRCodeDescription>
            {donationDescription}
          </S.QRCodeDescription>
          <S.QRCodeInput
            defaultValue={qrCode}
            $themeColor='green'
            InputProps={{
              readOnly: true,
              endAdornment: <InputAdornment position='end'>
                <S.CopyIcon onClick={() => copyToClipboard(qrCode, 'Código copiado com sucesso!')} />
              </InputAdornment>
            }}
          />
        </S.Container>
      )}
    </>
  );
};

export default DonationFinalStep;
