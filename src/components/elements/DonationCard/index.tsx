import { type FC } from 'react';

import type { IDonation } from '@ts/interfaces';

import { middleEndianFormat } from '@utils/date/middleEndianFormat';
import { resolveLabelStatus, resolveStatusColor } from '@utils/donation';

import * as S from './styles';

interface DonationCardProps {
  donation: IDonation;
  redirectTo: string;
}

const DonationCard: FC<DonationCardProps> = ({ donation, redirectTo }) => {
  const labelStatus = resolveLabelStatus(donation.status);
  const statusColor = resolveStatusColor(donation.status);
  const dateCreated = middleEndianFormat(new Date(donation.date_created), true);
  const dateApproved = middleEndianFormat(new Date(donation.date_approved as string), true);

  return (
    <S.Container href={redirectTo}>
      <S.Content>
        <S.Description donationStatusColor={statusColor}>
          {donation.description}
        </S.Description>
        <S.DateContainer>
          <S.DateValue>
            <S.DateLabel donationStatusColor={statusColor}>
              Criação:
            </S.DateLabel>
            {' '}{dateCreated}
          </S.DateValue>
          {!!donation.date_approved && (
            <S.DateValue>
              <S.DateLabel donationStatusColor={statusColor}>
                Aprovação:
              </S.DateLabel>
              {' '}{dateApproved}
            </S.DateValue>
          )}
        </S.DateContainer>
        <S.Status donationStatusColor={statusColor}>
          {labelStatus}
        </S.Status>
      </S.Content>
      <S.DonationValue>
        <S.DonationSymbol donationStatusColor={statusColor}>R$</S.DonationSymbol>
        {' '}{donation.transaction_amount}
      </S.DonationValue>
      <S.ViewContainer donationStatusColor={statusColor}>
        <S.ViewIcon donationStatusColor={statusColor} />
      </S.ViewContainer>
    </S.Container >
  );
};

export default DonationCard;
