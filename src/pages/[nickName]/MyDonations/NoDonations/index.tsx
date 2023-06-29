import { type FC } from 'react';

import { Image } from '@components/elements';

import * as S from './styles';

const NoDonations: FC = () => {
  const descriptionImage = 'Homem fazendo caridade - illustration by @Storyset';

  return (
    <S.NoDonationsContainer>
      <Image
        src='/illustrations/donation/charity.svg'
        alt={descriptionImage}
        title={descriptionImage}
        width='300'
        height='300'
        fill
      />
      <S.NoDonationsMessage>
        Não há doações até o momento, <br />
        faça sua primeira doação!
      </S.NoDonationsMessage>
    </S.NoDonationsContainer>
  );
};

export default NoDonations;
