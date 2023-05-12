import { type FC } from 'react';

import type { IDonation } from '@ts/interfaces';

import { InputAdornment } from '@mui/material';

import { copyToClipboard } from '@utils/inputs/copyToClipboard';

import QRCodeSkeleton from '../QRCodeSkeleton';

import { Container, QRCode, QRCodeDescription, QRCodeInput, CopyIcon } from './styles';
import { StepDescription, StepHighlightedText } from '../styles';

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
      <StepDescription>
        <StepHighlightedText>Identificação concluída!</StepHighlightedText> <br />
        Agora você pode realizar <br /> sua doação.
      </StepDescription>
      {isLoadingDonation && (
        <QRCodeSkeleton />
      )}
      {!isLoadingDonation && (
        <Container>
          <QRCode
            src={sourceImage}
            alt={donationDescription}
            title={donationDescription}
            width={200}
            height={200}
            draggable={false}
          />
          <QRCodeDescription>
            {donationDescription}
          </QRCodeDescription>
          <QRCodeInput
            defaultValue={qrCode}
            $themeColor='green'
            InputProps={{
              readOnly: true,
              endAdornment: <InputAdornment position='end'>
                <CopyIcon onClick={() => copyToClipboard(qrCode, 'Código copiado com sucesso!')} />
              </InputAdornment>
            }}
          />
        </Container>
      )}
    </>
  );
};

export default DonationFinalStep;
