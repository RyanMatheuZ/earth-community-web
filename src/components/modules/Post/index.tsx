import { useState, type FC } from 'react';

import { useMutation } from '@tanstack/react-query';

import type { IPost, IUser } from '@ts/interfaces';

import { useAuth } from '@context/auth';

import { usePost } from '@hooks/index';

import { queryClient } from '@services/tanstackQuery';

import { UserPictureProfile } from '@components/elements';
import { PostComments } from '@components/modules';

import { resolveCreatedAt, resolveUserLikePost } from '@utils/post';

import PostOptions from './PostOptions';

import * as S from './styles';

interface PostProps {
  postItems: IPost;
  postType: 'feed' | 'group';
}

const Post: FC<PostProps> = ({ postItems, postType }) => {
  const { user } = useAuth();

  const isUserLikeThePostInitialState = resolveUserLikePost(
    user?._id as IUser['_id'],
    postItems.likes.userIds
  );

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isUserLikeThePost, setIsUserLikeThePost] = useState<boolean>(isUserLikeThePostInitialState);

  const userName = `${postItems.createdByUser.user.info.firstName} ${postItems.createdByUser.user.info.surname}`;

  const isPostOwner = postItems.createdByUser.user._id === user?._id;

  const { handleUserToggleLikeThePost } = usePost();

  const handleToggleModal = () => {
    setIsOpenModal((prevState) => !prevState);
  };

  const { mutate } = useMutation(
    ({ postId, userId }: { postId: string, userId: IUser['_id'] }) => handleUserToggleLikeThePost(postId, userId),
    {
      onMutate: () => setIsUserLikeThePost((prevState) => !prevState),
      onSuccess: () => {
        queryClient.invalidateQueries(['all-posts']);
        queryClient.invalidateQueries(['all-posts-by-group-id']);
      }
    }
  );

  return (
    <>
      <S.Container>
        <S.Header>
          <S.PictureContainer>
            <UserPictureProfile
              pictureProfileSRC={postItems.createdByUser.user.info.pictureProfile}
              userName={userName}
              width='35'
              height='35'
            />
            {postType === 'feed' && (
              <UserPictureProfile
                pictureProfileSRC={postItems.createdByGroup.image}
                userName={postItems.createdByGroup.name}
                width='35'
                height='35'
              />
            )}
          </S.PictureContainer>
          <S.AdditionalInformation>
            <div>
              <S.CreatedBy>{userName}</S.CreatedBy> {' '}
              {postType === 'feed' && (
                <S.CreatedBy>| {postItems.createdByGroup.name}</S.CreatedBy>
              )}
            </div>
            <span>
              {resolveCreatedAt(postItems.createdAt)}
            </span>
          </S.AdditionalInformation>
          {isPostOwner && (
            <S.MenuItemContainer>
              <PostOptions
                createdByGroupId={postItems.createdByGroup._id}
                postId={postItems._id}
                isPostOwner={isPostOwner}
              />
            </S.MenuItemContainer>
          )}
        </S.Header>
        <S.Content>
          <S.Text>
            {postItems.text}
          </S.Text>
          <S.Image
            src={postItems.image}
            alt={postItems.text}
            draggable={false}
            fill
          />
        </S.Content>
        <S.ActionsContainer>
          <S.StyledToggleButton
            value={isUserLikeThePost}
            onClick={() => mutate({ postId: postItems._id, userId: user?._id as string })}
          >
            <S.StyledBadge badgeContent={postItems.likes.quantity}>
              {isUserLikeThePost ? <S.EnabledLikeIcon /> : <S.DisabledLikeIcon />}
            </S.StyledBadge>
            Apoiar
          </S.StyledToggleButton>
          <S.StyledToggleButton
            value={true}
            onClick={handleToggleModal}
          >
            <S.StyledBadge badgeContent={postItems.comments?.length}>
              <S.CommentIcon />
            </S.StyledBadge>
            Comentar
          </S.StyledToggleButton>
        </S.ActionsContainer>
      </S.Container>
      <PostComments
        isOpenModal={isOpenModal}
        handleToggleModal={handleToggleModal}
        postItem={postItems}
      />
    </>
  );
};

export default Post;
