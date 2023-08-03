import { type FC } from 'react';

import { Image } from '@components/elements';

import * as S from './styles';

interface NoDonationsProps {
  isBackgroundWhite?: boolean;
  message: string;
}

const NoDonations: FC<NoDonationsProps> = ({ isBackgroundWhite = true, message }) => {
  const descriptionImage = 'Homem fazendo caridade - illustration by @Storyset';

  return (
    <S.Container isBackgroundWhite={isBackgroundWhite}>
      <Image
        src='/illustrations/donation/charity.svg'
        alt={descriptionImage}
        title={descriptionImage}
        width='300'
        height='300'
        fill
      />
      <S.Message>
        {message}
      </S.Message>
    </S.Container>
  );
};

export default NoDonations;
