import { useState, useMemo, type FC } from 'react';
import { useRouter } from 'next/router';

import { Divider } from '@mui/material';

import type { IUser } from '@ts/interfaces';

import { BackIcon, StyledModal, UserNameSkeleton, UserPictureProfile, UserPictureProfileSkeleton } from '@components/elements';

import { middleEndianFormat } from '@utils/date/middleEndianFormat';

import UserProfileEditForm from '../UserProfileEditForm';
import AboutSectionSkeleton from '../AboutSectionSkeleton';
import AditionalInformationSkeleton from '../AditionalInformationSkeleton';

import * as S from './styles';

interface UserProfileInfoProps {
  user?: IUser;
  isLoading: boolean;
}

const UserProfileInfo: FC<UserProfileInfoProps> = ({ user, isLoading }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { back } = useRouter();

  const userBackgroundProfileDescription = 'Foto de fundo do perfil';
  const userName = `${user?.info.firstName} ${user?.info.surname}`;

  const handleToggleModal = () => {
    setIsOpenModal((prevState) => !prevState);
  };

  const userDefaultValues = useMemo(() => {
    return ({
      ...user?.info,
      ...user?.address
    });
  }, [user?.address, user?.info]);

  return (
    <>
      <S.Container>
        <S.UserBackgroundProfile
          src='/backgrounds/user-background-photo.svg'
          alt={userBackgroundProfileDescription}
          title={userBackgroundProfileDescription}
          draggable={false}
          fill
        />
        <S.UserPictureProfileContainer>
          <div>
            {isLoading
              ? <UserPictureProfileSkeleton />
              : <UserPictureProfile
                userName={userName}
                pictureProfileSRC={user?.info.pictureProfile}
                width='115'
                height='115'
              />}
            <S.UserName>
              {isLoading ? <UserNameSkeleton /> : userName}
            </S.UserName>
            {(user?.address.city && user.address.state) && (
              <>
                {isLoading
                  ? <AditionalInformationSkeleton />
                  : <S.AdditionalInformation title='Localidade'>
                    <S.GlobeIcon /> {user.address.city}, {user.address.state}
                  </S.AdditionalInformation>}
              </>
            )}
            {user?.info.dateOfBirth && (
              <>
                {isLoading
                  ? <AditionalInformationSkeleton />
                  : <S.AdditionalInformation title='Data de Nascimento'>
                    <S.CakeIcon /> {middleEndianFormat(user.info.dateOfBirth)}
                  </S.AdditionalInformation>}
              </>
            )}
          </div>
          <S.EditProfileButton onClick={handleToggleModal}>
            <S.EditIcon />
          </S.EditProfileButton>
        </S.UserPictureProfileContainer>
        <Divider />
        {user?.info.about && (
          <>
            {isLoading
              ? <AboutSectionSkeleton />
              : <S.AboutSection>
                <S.SectionTitle>Sobre</S.SectionTitle>
                <S.AboutText>{user.info.about}</S.AboutText>
              </S.AboutSection>}
          </>
        )}
        <S.BackButton onClick={back}>
          <BackIcon $themeColor='green' />
        </S.BackButton>
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
