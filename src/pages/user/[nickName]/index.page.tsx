import { type NextPage, type GetServerSideProps } from 'next';

import { dehydrate } from '@tanstack/react-query';

import { type AxiosResponse } from 'axios';

import type { IUser, IAchievements, IGroup } from '@ts/interfaces';

import { useAuth } from '@context/auth';

import { useUser, useAchievements, useGroup } from '@hooks/index';

import axiosInstance from '@services/axios';
import { queryClient } from '@services/tanstackQuery';

import { Head } from '@components/meta';
import { FeedHeader } from '@components/modules';

import UserProfileInfo from './UserProfileInfo';
import Achievements from './Achievements';
import MyDonations from './MyDonations';
import MyGroups from './MyGroups';

import { head } from './head';

import * as S from './styles';

interface UserProfileProps {
  nickName: string;
}

const UserProfile: NextPage<UserProfileProps> = ({ nickName }) => {
  const { user: userAuth } = useAuth();
  const { handleGetUserByNickName } = useUser();
  const { handleGetAllAchievements } = useAchievements();
  const { handleGetGroupByUserId } = useGroup();

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
  const {
    data: groups,
    isLoading: isLoadingGroups,
    isRefetching: isRefetchingGroups
  } = handleGetGroupByUserId(user?._id as string);

  const isProfileOwner = userAuth?._id === user?._id;
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
          {isProfileOwner && (
            <MyDonations
              userId={user?._id as string}
              nickNameUser={nickName}
            />
          )}
          <MyGroups
            groups={groups as IGroup[]}
            isLoading={isLoadingGroups || isRefetchingGroups}
          />
        </S.Content>
      </S.Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const handlePrefetchUserByNickName = async () => {
    const { data }: AxiosResponse<{ user: IUser }> = await axiosInstance.get(
      `/user/get-by-nickname/${query.nickName}`
    );
    return data.user;
  };

  await queryClient.prefetchQuery(['user-by-nick-name', query.nickName], handlePrefetchUserByNickName);

  return {
    props: {
      // https://github.com/TanStack/query/issues/1458#issuecomment-788447705
      dehydratedState: dehydrate(queryClient),
      nickName: query.nickName
    }
  };
};

export default UserProfile;
