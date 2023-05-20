import { useEffect, useMemo } from 'react';

import { type NextPage } from 'next';

import { useInView } from 'react-intersection-observer';

import type { IPost } from '@ts/interfaces';

import { usePost } from '@hooks/index';

import { Head } from '@components/meta';
import { FeedAsideNav, FeedHeader, Post } from '@components/modules';

import { title, description } from './head';

import { Container, PostContainer, Content, LoadingText } from './styles';

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
  }, [inView]);

  return (
    <>
      <Head
        title={title}
        description={description}
      />
      <Container>
        <FeedHeader />
        <Content>
          <FeedAsideNav />
          <PostContainer>
            {allPosts?.map((post, index) => (
              <Post
                key={`post-${post._id}-${index}`}
                postItems={post}
                postType='feed'
              />
            ))}
            <LoadingText ref={ref}>
              {(isFetchingNextPage || isLoading || hasNextPage)
                ? 'Carregando publicações...'
                : 'Não há novas publicações no momento :)'}
            </LoadingText>
          </PostContainer>
        </Content>
      </Container>
    </>
  );
};

export default Feed;