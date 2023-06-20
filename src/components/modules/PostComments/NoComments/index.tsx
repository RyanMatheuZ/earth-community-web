import { type FC } from 'react';

import { Image } from '@components/elements';

import * as S from './styles';

const NoComments: FC = () => {
  const descriptionImage = 'Abacateiro - illustration by @Storyset';

  return (
    <S.Container>
      <Image
        src='/illustrations/nature/avocado-tree.svg'
        alt={descriptionImage}
        title={descriptionImage}
        width='300'
        height='300'
        fill
      />
      <S.Message>
        Não há comentários até o momento, <br />
        seja o primeiro a comentar!
      </S.Message>
    </S.Container>
  );
};

export default NoComments;
