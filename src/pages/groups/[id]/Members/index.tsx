import { type FC } from 'react';

import type { IGroup } from '@ts/interfaces';

import { TopicSection } from '@components/modules';
import { UserPictureProfile } from '@components/elements';

import * as S from './styles';

interface MembersProps {
  members: IGroup['members'];
}

const Members: FC<MembersProps> = ({ members }) => {
  const initialMembersAmount = 5;
  const membersAmount = members?.length ?? 0;
  const remainingMembers = membersAmount - initialMembersAmount;
  const firstMembers = members?.slice(0, initialMembersAmount);

  return (
    <TopicSection
      topic={`Membros (${membersAmount})`}
      topicIcon={<S.MembersIcon />}
    >
      <S.CardContainer>
        {firstMembers?.map(({ user: { _id, info } }, index) => (
          <S.Card key={`member-${_id}-${index}`}>
            <S.PhotoAndName>
              <UserPictureProfile
                pictureProfileSRC={info.pictureProfile}
                userName={`${info.firstName} ${info.surname}`}
                width='50'
                height='50'
              />
              <S.Name>
                {`${info.firstName} ${info.surname}`}
              </S.Name>
            </S.PhotoAndName>
            <S.NickName href={`/${info.nickName}`}>
              @{info.nickName}
            </S.NickName>
            {index === 0 && (
              <S.GroupOwner>
                <S.OwnerIcon />
              </S.GroupOwner>
            )}
          </S.Card>
        ))}
        {!firstMembers?.length && Array.from({ length: initialMembersAmount }).map((_, index) => (
          <S.CardSkeleton key={`card-skeleton-${index}`} />
        ))}
      </S.CardContainer>
      {membersAmount > initialMembersAmount && (
        <S.RemainingMembers>
          E mais {remainingMembers} membro{remainingMembers > 1 && 's'}...
        </S.RemainingMembers>
      )}
    </TopicSection>
  );
};

export default Members;
