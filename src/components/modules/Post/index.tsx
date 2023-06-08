import { useState, type FC } from 'react';

import { useQueryClient, useMutation } from '@tanstack/react-query';

import type { IPost, IUser } from '@ts/interfaces';

import { useAuth } from '@context/auth';

import { usePost } from '@hooks/index';

import { UserPictureProfile } from '@components/elements';
import { PostComments } from '@components/modules';

import { resolveCreatedAt, resolveUserLikePost } from '@utils/post';

import * as S from './styles';

interface PostProps {
  postItems: IPost;
  postType: 'feed' | 'group';
}

const Post: FC<PostProps> = ({ postItems }) => {
  const { user } = useAuth();

  const isUserLikeThePostInitialState = resolveUserLikePost(
    user?._id as IUser['_id'],
    postItems.likes.userIds
  );

  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [isUserLikeThePost, setIsUserLikeThePost] = useState<boolean>(isUserLikeThePostInitialState);

  const userName = `${postItems.createdByUser.info.firstName} ${postItems.createdByUser.info.surname}`;

  const queryClient = useQueryClient();

  const { handleUserToggleLikeThePost } = usePost();

  const handleToggleDialog = () => {
    setIsDialogOpen((prevState) => !prevState);
  };

  const { mutate } = useMutation(
    ({ postId, userId }: { postId: string, userId: IUser['_id'] }) => handleUserToggleLikeThePost(postId, userId),
    {
      onMutate: () => setIsUserLikeThePost((prevState) => !prevState),
      onSuccess: () => queryClient.invalidateQueries(['all-posts'])
    }
  );

  return (
    <>
      <S.Container>
        <S.Header>
          <UserPictureProfile
            pictureProfileSRC={postItems.createdByUser.info.pictureProfile}
            userName={userName}
            width='35'
            height='35'
          />
          <S.AdditionalInformation>
            <div>
              <S.CreatedBy>{userName}</S.CreatedBy>
            </div>
            <span>
              {resolveCreatedAt(postItems.createdAt)}
            </span>
          </S.AdditionalInformation>
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
            <S.StyledBadge badgeContent={postItems.likes.quantity} >
              {isUserLikeThePost ? <S.EnabledLikeIcon /> : <S.DisabledLikeIcon />}
            </S.StyledBadge>
            Apoiar
          </S.StyledToggleButton>
          <S.StyledToggleButton
            value={true}
            onClick={handleToggleDialog}
          >
            <S.StyledBadge badgeContent={postItems.comments?.length}>
              <S.CommentIcon />
            </S.StyledBadge>
            Comentar
          </S.StyledToggleButton>
        </S.ActionsContainer>
      </S.Container>
      <PostComments
        isDialogOpen={isDialogOpen}
        handleToggleDialog={handleToggleDialog}
        postItem={postItems}
      />
    </>
  );
};

export default Post;
