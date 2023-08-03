import { type NextPage, type GetServerSideProps } from 'next';

import type { IGroup } from '@ts/interfaces';

import { useGroup, usePost } from '@hooks/index';

import { Head } from '@components/meta';
import { FeedHeader } from '@components/modules';

import { head } from './head';

import GroupProfileInfo from './GroupProfileInfo';
import Members from './Members';
import Posts from './Posts';

import * as S from './styles';

interface GroupInfoProps {
  groupId: string;
}

const GroupInfo: NextPage<GroupInfoProps> = ({ groupId }) => {
  const { handleGetGroupById } = useGroup();
  const { handleGetAllPostsByGroupId } = usePost();

  const { data: group } = handleGetGroupById(groupId);
  const {
    data: posts,
    isLoading,
    isRefetching,
    fetchNextPage
  } = handleGetAllPostsByGroupId(groupId);

  const { title, description } = head(
    group?.name as string,
    group?.description as string
  );

  return (
    <>
      <Head
        title={title}
        description={description}
      />
      <S.Container>
        <FeedHeader />
        <S.Content>
          <GroupProfileInfo
            group={group as IGroup}
            isLoading={isLoading || isRefetching}
          />
          <Members members={group?.members as IGroup['members']} />
          <Posts
            posts={posts?.pages}
            isLoading={isLoading || isRefetching}
            fetchNextPage={fetchNextPage}
            group={group as IGroup}
          />
        </S.Content>
      </S.Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: {
      groupId: query.id
    }
  };
};

export default GroupInfo;
