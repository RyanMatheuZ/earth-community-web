import { type FC } from 'react';

import * as S from './styles';

const RedirectLinkForDonation: FC = () => {
  return (
    <S.LinkContainer href='/donate-now'>
      <S.WalletIcon /> Doe agora
    </S.LinkContainer>
  );
};

export default RedirectLinkForDonation;
