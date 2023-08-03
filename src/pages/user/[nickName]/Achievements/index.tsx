import { type FC } from 'react';

import type { IAchievements } from '@ts/interfaces';

import { TopicSection } from '@components/modules';

import { achievements as utilsAchievements } from '@utils/datas/achievements';

import * as S from './styles';

interface AchievementsProps extends IAchievements {
  isLoading: boolean;
}

const Achievements: FC<AchievementsProps> = ({ achievements, isLoading }) => {
  const completedAchievementsAmount = achievements?.filter(({ completed }) => !!completed).length;

  const topic = `Conquistas • (${completedAchievementsAmount ?? '...'}/${achievements?.length ?? '...'})`;

  return (
    <TopicSection
      topic={topic}
      topicIcon={<S.AchievementIcon />}
    >
      <S.Container>
        {achievements?.map(({ completed }, index) => (
          <S.Card
            key={`achievement-${index}`}
            completed={completed}
          >
            <S.Title>
              {utilsAchievements[index].label}
            </S.Title>
            <S.Icon>
              {utilsAchievements[index].icon}
            </S.Icon>
            <S.Description>
              {utilsAchievements[index].description}
            </S.Description>
            <S.CardIcon style={{ left: '-5px' }}>
              <S.CardLeftIcon />
            </S.CardIcon>
            <S.CardIcon style={{ right: '-5px' }}>
              <S.CardRightIcon />
            </S.CardIcon>
          </S.Card>
        ))}
        {(isLoading && !achievements) && Array.from({ length: 11 }).map((_, index) => (
          <S.CardSkeleton key={`card-skeleton-${index}`} />
        ))}
      </S.Container>
    </TopicSection>
  );
};

export default Achievements;
