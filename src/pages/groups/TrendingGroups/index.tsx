import { type FC } from 'react';

import type { IGroup } from '@ts/interfaces';

import { TopicSection } from '@components/modules';
import { GroupCard, GroupCardSkeleton } from '@components/elements';

import * as S from '../styles';

interface TrendingGroupsProps {
  trendinGroups: IGroup[];
  isLoading: boolean;
}

const TrendingGroups: FC<TrendingGroupsProps> = ({ trendinGroups, isLoading }) => {
  return (
    <TopicSection
      topic='Grupos em alta'
      topicIcon={<S.TrendingIcon />}
    >
      <S.GroupContainer>
        {trendinGroups?.map(({ _id, name, image, members, category }, index) => (
          <GroupCard
            key={`trending-group-${_id}-${index}`}
            backgroundImageURL={image}
            title={name}
            membersLength={members.length}
            category={category}
            visitGroupLink={`/groups/${_id}`}
          />
        ))}
        {isLoading && Array.from({ length: 5 }).map((_, index) => (
          <GroupCardSkeleton key={`trending-group-skeleton-${index}`} />
        ))}
      </S.GroupContainer>
    </TopicSection>
  );
};

export default TrendingGroups;
