import { type FC } from 'react';

import type { IGroup } from '@ts/interfaces';

import { TopicSection } from '@components/modules';
import { EmptyGroupCard, GroupCard, GroupCardSkeleton } from '@components/elements';

import * as S from '../styles';

interface OtherGroupsProps {
  groups: IGroup[];
  isLoading: boolean;
  handleToggleModal: () => void;
}

const OtherGroups: FC<OtherGroupsProps> = ({ groups, isLoading, handleToggleModal }) => {
  const initialGroupsAmount = 5;

  return (
    <TopicSection
      topic='Outros grupos'
      topicIcon={<S.GroupIcon />}
    >
      <S.GroupContainer>
        {!!groups?.length && groups?.map(({ _id, name, image, members, category }, index) => (
          <GroupCard
            key={`group-card-${_id}-${index}`}
            backgroundImageURL={image}
            title={name}
            membersLength={members.length}
            category={category}
            visitGroupLink={`/groups/${_id}`}
          />
        ))}
        {(!isLoading && !groups?.length) && (
          <EmptyGroupCard
            message='Não há grupos até o momento, seja o primeiro a criar!'
            handleClick={handleToggleModal}
          />
        )}
        {isLoading && Array.from({ length: initialGroupsAmount }).map((_, index) => (
          <GroupCardSkeleton key={`group-skeleton-${index}`} />
        ))}
      </S.GroupContainer>
    </TopicSection>
  );
};

export default OtherGroups;
