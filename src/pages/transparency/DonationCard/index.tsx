import { type FC } from 'react';

import type { IDonation } from '@ts/interfaces';
import type { TInfoPayer } from '@ts/types';

import { middleEndianFormat } from '@utils/date/middleEndianFormat';

import * as S from './styles';

interface DonationCardProps {
  donation: IDonation;
  infoPayer: TInfoPayer['payer'];
}

const DonationCard: FC<DonationCardProps> = ({ donation, infoPayer }) => {
  const dateApproved = middleEndianFormat(new Date(donation.date_approved as string), true);

  return (
    <S.Container>
      <S.Content>
        <S.Description>
          {donation.description}
        </S.Description>
        <S.ItemsContainer>
          <S.Value>
            <S.Label>Aprovação:</S.Label> {dateApproved}
          </S.Value>
          <S.Value>
            <S.Label>Nome:</S.Label> {infoPayer.first_name} {infoPayer.last_name}
          </S.Value>
          <S.Value>
            <S.Label>CPF:</S.Label> {infoPayer.identification.partialCPF}
          </S.Value>
          <S.Value>
            <S.Label>E-mail:</S.Label> {infoPayer.email}
          </S.Value>
        </S.ItemsContainer>
      </S.Content>
      <S.DonationValue>
        <S.DonationSymbol>R$</S.DonationSymbol> {donation.transaction_amount}
      </S.DonationValue>
    </S.Container>
  );
};

export default DonationCard;
