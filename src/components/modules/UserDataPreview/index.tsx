import { type FC } from 'react';

import { useAuth } from '@context/auth';

import { UserPictureProfile } from '@components/elements';

import { slugify } from '@utils/transforms/slugify';

import * as S from './styles';

const UserDataPreview: FC = () => {
  const { user } = useAuth();

  const userBackgroundProfileDescription = 'Foto de fundo do perfil';

  const userName = `${user?.info.firstName} ${user?.info.surname}`;

  const userNameSlug = slugify(userName);

  return (
    <S.Container>
      <S.UserBackgroundProfile
        src='/backgrounds/icons-white.png'
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
        <S.UserName href={userNameSlug}>
          {userName}
        </S.UserName>
      </S.UserPictureProfileContainer>
    </S.Container>
  );
};

export default UserDataPreview;
