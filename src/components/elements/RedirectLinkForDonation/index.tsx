import { type FC } from 'react';

import { LinkContainer, WalletIcon } from './styles';

const RedirectLinkForDonation: FC = () => {
  return (
    <LinkContainer href='/donate-now'>
      <WalletIcon /> Doe agora
    </LinkContainer>
  );
};

export default RedirectLinkForDonation;
