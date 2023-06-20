import { type FC } from 'react';

import type { IGroup } from '@ts/interfaces';

import { AbsoluteBackButton, UserNameSkeleton, UserPictureProfileSkeleton, UserPictureProfile } from '@components/elements';

import ActionButtons from '../ActionButons';
import GroupDescriptionSkeleton from '../GroupDescriptionSkeleton';

import * as S from './styles';

interface GroupProfileInfoProps {
  group: IGroup;
  isLoading: boolean;
}

const GroupProfileInfo: FC<GroupProfileInfoProps> = ({ group, isLoading }) => {
  const userBackgroundProfileDescription = 'Foto de fundo do perfil';

  return (
    <S.Container>
      <S.GroupBackgroundProfile
        src='/backgrounds/group-background-photo.svg'
        alt={userBackgroundProfileDescription}
        title={userBackgroundProfileDescription}
        draggable={false}
        fill
      />
      <S.GroupImageProfileContainer>
        {isLoading
          ? <UserPictureProfileSkeleton />
          : <UserPictureProfile
            userName={group?.name}
            pictureProfileSRC={group?.image}
            width='115'
            height='115'
            $themeColor='white'
          />}
        <S.UserName>
          {isLoading ? <UserNameSkeleton /> : group?.name}
        </S.UserName>
      </S.GroupImageProfileContainer>
      <S.Description>
        {isLoading ? <GroupDescriptionSkeleton /> : group?.description}
      </S.Description>
      <AbsoluteBackButton $themeColor='green' />
      <ActionButtons group={group} />
    </S.Container >
  );
};

export default GroupProfileInfo;
