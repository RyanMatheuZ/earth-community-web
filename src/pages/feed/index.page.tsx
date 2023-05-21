import { useEffect, useMemo } from 'react';

import { type NextPage, type GetServerSideProps } from 'next';

import { dehydrate } from '@tanstack/react-query';

import { type AxiosResponse } from 'axios';

import { useInView } from 'react-intersection-observer';

import type { IPost } from '@ts/interfaces';

import axiosInstance from '@services/axios';
import { queryClient } from '@services/tanstackQuery';

import { usePost } from '@hooks/index';

import { Head } from '@components/meta';
import { FeedAsideNav, FeedHeader, Post } from '@components/modules';

import { title, description } from './head';

import * as S from './styles';

const Feed: NextPage = () => {
  const { handleGetAllPosts } = usePost();

  const { ref, inView } = useInView();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading
  } = handleGetAllPosts();

  const allPosts = useMemo(() => {
    return data?.pages.reduce((acc, page) => [
      ...acc as IPost[],
      ...page as IPost[]
    ], []);
  }, [data]);

  useEffect(() => {
    if (inView) fetchNextPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <>
      <Head
        title={title}
        description={description}
      />
      <S.Container>
        <FeedHeader />
        <S.Content>
          <FeedAsideNav />
          <S.PostContainer>
            {allPosts?.map((post, index) => (
              <Post
                key={`post-${post._id}-${index}`}
                postItems={post}
                postType='feed'
              />
            ))}
            <S.LoadingText ref={ref}>
              {(isFetchingNextPage || isLoading || hasNextPage)
                ? 'Carregando publicações...'
                : 'Não há novas publicações no momento :)'}
            </S.LoadingText>
          </S.PostContainer>
        </S.Content>
      </S.Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const handlePrefetchAllPosts = async () => {
    const { data }: AxiosResponse<{ posts: IPost }> = await axiosInstance.get('/post/get-all?perPage=10&page=1');
    return data.posts;
  };

  await queryClient.prefetchInfiniteQuery(['all-posts'], handlePrefetchAllPosts);

  res.setHeader(
    'Cache-Control', `s-maxage=${queryClient.getDefaultOptions().queries?.staleTime}, stale-while-revalidate=120`
  );

  return {
    props: {
      // https://github.com/TanStack/query/issues/1458#issuecomment-788447705
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient)))
    }
  };
};

export default Feed;
