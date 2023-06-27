import { type FC } from 'react';

import { TopicSection } from '@components/modules';

import * as S from './styles';

const MyDonations: FC = () => {
  return (
    <TopicSection
      topic='Doações'
      topicIcon={<S.MyDonationsIcon />}
    >
      <S.Container>
      </S.Container>
    </TopicSection>
  );
};

export default MyDonations;
