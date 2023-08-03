import { type FC } from 'react';

import type { IDonation } from '@ts/interfaces';

import { QRCode } from '@components/elements';

import * as S from '../styles';

interface DonationFinalStepProps {
  donation?: IDonation;
  isLoadingDonation: boolean;
}

const DonationFinalStep: FC<DonationFinalStepProps> = ({ donation, isLoadingDonation }) => {
  return (
    <>
      <S.StepDescription>
        <S.StepHighlightedText>Identificação concluída!</S.StepHighlightedText> <br />
        Agora você pode realizar <br /> sua doação.
      </S.StepDescription>
      <QRCode
        src={`data:image/jpeg;base64, ${donation?.point_of_interaction.transaction_data.qr_code_base64}`}
        description={donation?.description as string}
        transactionCode={donation?.point_of_interaction.transaction_data.qr_code as string}
        isLoading={isLoadingDonation}
      />
    </>
  );
};

export default DonationFinalStep;
