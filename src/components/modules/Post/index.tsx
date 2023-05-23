import { useState, useMemo, type FC } from 'react';

import { useQueryClient, useMutation } from '@tanstack/react-query';

import type { IPost, IUser } from '@ts/interfaces';

import { useAuth } from '@context/auth';

import { usePost } from '@hooks/index';

import { UserPictureProfile } from '@components/elements';
import { PostComment } from '@components/modules';

import { resolvePostCreatedAt, resolveUserLikePost } from '@utils/post';

import * as S from './styles';

interface PostProps {
  postItems: IPost;
  postType: 'feed' | 'group';
}

const Post: FC<PostProps> = ({ postItems }) => {
  const { user } = useAuth();

  const isUserLikeThePostInitialState = useMemo(() => {
    return resolveUserLikePost(
      user?._id as IUser['_id'],
      postItems.likes.userIds
    );
  }, [user?._id, postItems.likes.userIds]);

  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [isUserLikeThePost, setIsUserLikeThePost] = useState<boolean>(isUserLikeThePostInitialState);

  const userName = `${user?.info.firstName} ${user?.info.surname}`;

  const queryClient = useQueryClient();

  const { handleUserToggleLikeThePost } = usePost();

  const handleToggleDialog = () => {
    setIsDialogOpen((prevState) => !prevState);
  };

  const { mutate } = useMutation(
    () => handleUserToggleLikeThePost(postItems._id, user?._id as IUser['_id']),
    {
      onMutate: () => {
        queryClient.invalidateQueries(['all-posts']);
        setIsUserLikeThePost((prevState) => !prevState);
      }
    }
  );

  return (
    <>
      <S.Container>
        <S.Header>
          <UserPictureProfile
            pictureProfileSRC={user?.info.pictureProfile}
            userName={userName}
            width='35'
            height='35'
          />
          <S.AdditionalInformation>
            <S.CreatedByContainer>
              <S.CreatedBy>{postItems.createdByUserId}</S.CreatedBy>
            </S.CreatedByContainer>
            <S.PublicationDate>
              {resolvePostCreatedAt(postItems.createdAt)}
            </S.PublicationDate>
          </S.AdditionalInformation>
        </S.Header>
        <S.Content>
          <S.Text>
            {postItems.text}
          </S.Text>
          <S.Image
            src='/backgrounds/florest.png'
            alt={postItems.text}
            draggable={false}
            fill
          />
        </S.Content>
        <S.ActionsContainer>
          <S.StyledToggleButton
            value={isUserLikeThePost}
            onClick={() => mutate()}
          >
            <S.StyledBadge badgeContent={postItems.likes.quantity} >
              {isUserLikeThePost ? <S.EnabledLikeIcon /> : <S.DisabledLikeIcon />}
            </S.StyledBadge>
            Apoio
          </S.StyledToggleButton>
          <S.StyledToggleButton
            value={true}
            onClick={handleToggleDialog}
          >
            <S.StyledBadge badgeContent={postItems.comments.length}>
              <S.CommentIcon />
            </S.StyledBadge>
            Comentar
          </S.StyledToggleButton>
        </S.ActionsContainer>
      </S.Container>
      <PostComment
        isDialogOpen={isDialogOpen}
        handleToggleDialog={handleToggleDialog}
      />
    </>
  );
};

export default Post;
