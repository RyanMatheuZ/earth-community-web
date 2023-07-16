import { useState, useEffect, useMemo, type FC } from 'react';

import { useInView } from 'react-intersection-observer';

import type { IGroup, IPost } from '@ts/interfaces';

import { useAuth } from '@context/auth';

import { TopicSection, Post } from '@components/modules';
import { Image, LoadingText, StyledModal } from '@components/elements';

import { isUserGroupMember } from '@utils/group';

import CreatePostForm from '../CreatePostForm';

import * as S from './styles';

interface PostsProps {
  posts: (IPost[] | undefined)[] | undefined;
  isLoading: boolean;
  fetchNextPage: () => void;
  group: IGroup;
}

const Posts: FC<PostsProps> = ({ posts, isLoading, fetchNextPage, group }) => {
  const { ref, inView } = useInView();
  const { user } = useAuth();

  const [isOpenModal, setIsOpenModal] = useState(false);

  const descriptionImage = 'Corredor se hidratando - illustration by @Storyset';

  const handleToggleModal = () => {
    setIsOpenModal((prevState) => !prevState);
  };

  const allPosts = useMemo(() => {
    return posts?.reduce((acc, page) => [
      ...acc as IPost[],
      ...page as IPost[]
    ], []);
  }, [posts]);

  useEffect(() => {
    if (inView) fetchNextPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <>
      <TopicSection
        topic='Publicações'
        topicIcon={<S.PostIcon />}
      >
        {isUserGroupMember(user?._id as string, group?.members) && (
          <S.CreatePostButton onClick={handleToggleModal}>
            <S.CreatePostIcon /> Criar publicação
          </S.CreatePostButton>
        )}
      </TopicSection>
      {!!allPosts?.length && (
        <S.PostsContainer>
          {allPosts.map((post, index) => (
            <Post
              key={`post-by-group-id-${post._id}-${index}`}
              postItems={post}
              postType='group'
            />
          ))}
          <div ref={ref} />
          <LoadingText
            isLoading={isLoading}
            loadingText='Carregando publicações...'
            notLoadingText='Não há mais publicações até o momento :)'
          />
        </S.PostsContainer>
      )}
      {!allPosts?.length && (
        <S.NoPostsContainer>
          <Image
            src='/illustrations/people/hydratation.svg'
            alt={descriptionImage}
            title={descriptionImage}
            width='300'
            height='300'
            fill
          />
          <S.NoPostsMessage>
            Não há publicações até o momento, <br />
            seja o primeiro a publicar!
          </S.NoPostsMessage>
        </S.NoPostsContainer>
      )}
      <StyledModal
        isOpen={isOpenModal}
        handleToggleModal={handleToggleModal}
        modalTitle='Criação da publicação'
        content={
          <CreatePostForm
            groupId={group?._id}
            handleToggleModal={handleToggleModal}
          />
        }
      />
    </>
  );
};

export default Posts;
