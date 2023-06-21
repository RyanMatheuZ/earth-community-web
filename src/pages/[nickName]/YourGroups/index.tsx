import { type FC } from 'react';

import { useRouter } from 'next/router';

import type { IGroup } from '@ts/interfaces';

import { TopicSection } from '@components/modules';
import { EmptyGroupCard, GroupCard, GroupCardSkeleton } from '@components/elements';

import * as S from './styles';

interface YourGroupsProps {
  groups: IGroup[];
  isLoading: boolean;
}

const YourGroups: FC<YourGroupsProps> = ({ groups, isLoading }) => {
  const { push } = useRouter();

  const initialGroupsAmount = 5;

  return (
    <TopicSection
      topic={`Seus grupos • (${groups?.length ?? '...'})`}
      topicIcon={<S.YourGroupsIcon />}
    >
      <S.Container>
        {!!groups?.length && groups?.map(({ _id, name, image, members, category }, index) => (
          <GroupCard
            key={`user-group-card-${_id}-${index}`}
            backgroundImageURL={image}
            title={name}
            membersLength={members.length}
            category={category}
            visitGroupLink={`/groups/${_id}`}
          />
        ))}
        {(!isLoading && !groups?.length) && Array.from({ length: initialGroupsAmount }).map((_, index) => (
          <EmptyGroupCard
            key={`user-empty-group-card-${index}`}
            message='Você não faz parte de nenhum grupo até o momento, entre em algum!'
            handleClick={() => push('/groups')}
          />
        ))}
        {isLoading && Array.from({ length: initialGroupsAmount }).map((_, index) => (
          <GroupCardSkeleton key={`user-group-skeleton-${index}`} />
        ))}
      </S.Container>
    </TopicSection>
  );
};

export default YourGroups;
