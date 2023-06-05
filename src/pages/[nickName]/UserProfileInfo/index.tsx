import { useState, type FC } from 'react';

import type { IUser } from '@ts/interfaces';

import { StyledModal, UserNameSkeleton, UserPictureProfile } from '@components/elements';

import UserProfileEditForm from '../UserProfileEditForm';

import * as S from './styles';

interface UserProfileInfoProps {
  user?: IUser;
  isLoading: boolean;
}

const UserProfileInfo: FC<UserProfileInfoProps> = ({ user, isLoading }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const userBackgroundProfileDescription = 'Foto de fundo do perfil';
  const userName = `${user?.info.firstName} ${user?.info.surname}`;

  const handleToggleModal = () => {
    setIsOpenModal((prevState) => !prevState);
  };

  const userDefaultValues = {
    ...user?.info,
    ...user?.address
  };

  return (
    <>
      <S.Container>
        <S.UserBackgroundProfile
          src='/backgrounds/icons-green.png'
          alt={userBackgroundProfileDescription}
          title={userBackgroundProfileDescription}
          draggable={false}
          fill
        />
        <S.UserPictureProfileContainer>
          <div>
            <UserPictureProfile
              userName={userName}
              pictureProfileSRC={user?.info.pictureProfile}
              width='115'
              height='115'
            />
            <S.UserName>
              {isLoading ? <UserNameSkeleton /> : userName}
            </S.UserName>
            {(user?.address?.city && user?.address?.state) && (
              <S.CityAndState>
                <S.GlobeIcon /> {user?.address.city}, {user?.address.state}
              </S.CityAndState>
            )}
          </div>
          <S.EditProfileButton onClick={handleToggleModal}>
            <S.EditIcon />
          </S.EditProfileButton>
        </S.UserPictureProfileContainer>
      </S.Container>
      <StyledModal
        isOpen={isOpenModal}
        handleToggleModal={handleToggleModal}
        modalTitle='Editar informações pessoais'
        content={<UserProfileEditForm userDefaultValues={userDefaultValues} />}
      />
    </>
  );
};

export default UserProfileInfo;
