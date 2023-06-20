import { type NextPage, type GetServerSideProps } from 'next';

import type { IUser, IAchievements } from '@ts/interfaces';

import { useUser, useAchievements } from '@hooks/index';

import { Head } from '@components/meta';
import { FeedHeader } from '@components/modules';

import UserProfileInfo from './UserProfileInfo';
import Achievements from './Achievements';

import { head } from './head';

import * as S from './styles';

interface UserProfileProps {
  nickName: string;
}

const UserProfile: NextPage<UserProfileProps> = ({ nickName }) => {
  const { handleGetUserByNickName } = useUser();
  const { handleGetAllAchievements } = useAchievements();

  const {
    data: user,
    isLoading: isLoadingUser,
    isRefetching: isRefetchingUser
  } = handleGetUserByNickName(nickName as string);
  const {
    data: achievements,
    isLoading: isLoadingAchievements,
    isRefetching: isRefetchingAchievements
  } = handleGetAllAchievements(user?._id as string);

  const userName = `${user?.info?.firstName} ${user?.info?.surname}`;

  const { title, description } = head(userName);

  return (
    <>
      <Head
        title={title}
        description={description}
      />
      <S.Container>
        <FeedHeader />
        <S.Content>
          <UserProfileInfo
            user={user as IUser}
            isLoading={isLoadingUser || isRefetchingUser}
          />
          <Achievements
            achievements={achievements as IAchievements['achievements']}
            isLoading={isLoadingAchievements || isRefetchingAchievements}
          />
        </S.Content>
      </S.Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: {
      nickName: query.nickName
    }
  };
};

export default UserProfile;
