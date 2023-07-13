import { useEffect, useMemo } from 'react';

import { type NextPage, type GetServerSideProps } from 'next';

import { useInView } from 'react-intersection-observer';

import type { IPost } from '@ts/interfaces';

import { usePost } from '@hooks/index';

import { Head } from '@components/meta';
import { FeedAsideNav, FeedHeader, Post } from '@components/modules';
import { LoadingText } from '@components/elements';

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
            <LoadingText
              ref={ref}
              isLoading={isFetchingNextPage || isLoading}
              loadingText='Carregando publicações...'
              notLoadingText='Não há mais publicações até o momento :)'
            />
          </S.PostContainer>
        </S.Content>
      </S.Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const isAuthUser = req.cookies[process.env.NEXT_PUBLIC_COOKIE_NAME];

  if (!isAuthUser) {
    return {
      redirect: {
        destination: '/welcome',
        permanent: false
      }
    };
  }

  return {
    props: {}
  };
};

export default Feed;
