import { type FC } from 'react';

import { DoughnutChart, TopicSection } from '@components/modules';

import * as S from './styles';

const MyDonations: FC = () => {
  return (
    <TopicSection
      topic='Minhas Doações'
      topicIcon={<S.MyDonationsIcon />}
    >
      <S.Container>
      </S.Container>
    </TopicSection>
  );
};

export default MyDonations;
