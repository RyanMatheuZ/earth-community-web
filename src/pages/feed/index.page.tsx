import { useEffect, useMemo } from 'react';

import { type NextPage } from 'next';

import { useInView } from 'react-intersection-observer';

import type { IPost } from '@ts/interfaces';

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
              {(isFetchingNextPage || isLoading)
                ? 'Carregando publicações...'
                : 'Não há novas publicações no momento :)'}
            </S.LoadingText>
          </S.PostContainer>
        </S.Content>
      </S.Container>
    </>
  );
};


export default Feed;
