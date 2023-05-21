import { type FC } from 'react';

import { useAuth } from '@context/auth';

import { UserPictureProfile } from '@components/elements';

import { Container, UserBackgroundProfile, UserPictureProfileContainer, UserName } from './styles';

const UserDataPreview: FC = () => {
  const { user } = useAuth();

  const userBackgroundProfileDescription = 'Foto de fundo do perfil';

  const userName = `${user?.info.firstName} ${user?.info.surname}`;

  return (
    <Container>
      <UserBackgroundProfile
        src='/backgrounds/icons-white.png'
        alt={userBackgroundProfileDescription}
        title={userBackgroundProfileDescription}
        draggable={false}
        fill
      />
      <UserPictureProfileContainer>
        <UserPictureProfile
          userName={userName}
          pictureProfileSRC={user?.info.pictureProfile}
          width='60'
          height='60'
        />
        <UserName>
          {userName}
        </UserName>
      </UserPictureProfileContainer>
    </Container>
  );
};

export default UserDataPreview;
