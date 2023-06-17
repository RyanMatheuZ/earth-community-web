import { type NextPage, type GetServerSideProps } from 'next';

import type { IUser } from '@ts/interfaces';

import { useUser } from '@hooks/index';

import { Head } from '@components/meta';
import { FeedHeader } from '@components/modules';

import UserProfileInfo from './UserProfileInfo';

import { head } from './head';

import * as S from './styles';

interface UserProfileProps {
  nickName: string;
}

const UserProfile: NextPage<UserProfileProps> = ({ nickName }) => {
  const { handleGetUserByNickName } = useUser();

  const { data, isLoading, isRefetching } = handleGetUserByNickName(nickName as string);

  const userName = `${data?.info?.firstName} ${data?.info?.surname}`;

  const { title, description } = head(userName);

  return (
    <>
      <Head
        title={title}
        description={description}
      />
      <S.Container>
        <FeedHeader />
        <UserProfileInfo
          user={data as IUser}
          isLoading={isLoading || isRefetching}
        />
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
