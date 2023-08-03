import { type FC } from 'react';

import { useAuth } from '@context/auth';

import { UserPictureProfile } from '@components/elements';

import * as S from './styles';

const UserDataPreview: FC = () => {
  const { user } = useAuth();

  const userBackgroundProfileDescription = 'Foto de fundo do perfil';

  const userName = `${user?.info.firstName ?? '...'} ${user?.info.surname ?? '...'}`;

  return (
    <S.Container href={`/user/${user?.info.nickName}`}>
      <S.UserBackgroundProfile
        src='/backgrounds/user-background-photo.svg'
        alt={userBackgroundProfileDescription}
        title={userBackgroundProfileDescription}
        draggable={false}
        fill
      />
      <S.UserPictureProfileContainer>
        <UserPictureProfile
          userName={userName}
          pictureProfileSRC={user?.info.pictureProfile}
          width='60'
          height='60'
        />
        <S.UserName >
          {userName}
        </S.UserName>
      </S.UserPictureProfileContainer>
      <S.ViewContainer>
        <S.ViewIcon />
      </S.ViewContainer>
    </S.Container>
  );
};

export default UserDataPreview;
