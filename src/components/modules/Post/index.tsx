import { useState, type FC } from 'react';

import { useQueryClient, useMutation } from '@tanstack/react-query';

import type { IPost, IUser } from '@ts/interfaces';

import { useAuth } from '@context/auth';

import { usePost } from '@hooks/index';

import { UserPictureProfile } from '@components/elements';

import { resolvePostCreatedAt, resolveUserLikePost } from '@utils/post';

import {
  Container,
  Header,
  Content,
  Text,
  Image,
  AdditionalInformation,
  CreatedByContainer,
  CreatedBy,
  PublicationDate,
  ActionsContainer,
  StyledToggleButton,
  StyledBadge,
  DisabledLikeIcon,
  EnabledLikeIcon,
  CommentIcon
} from './styles';

interface PostProps {
  postItems: IPost;
  postType: 'feed' | 'group';
}

const Post: FC<PostProps> = ({ postItems }) => {
  const { user } = useAuth();

  const [isUserLikeThePost, setIsUserLikeThePost] = useState<boolean>(() => {
    return resolveUserLikePost(
      user?._id as IUser['_id'],
      postItems.likes.userIds
    );
  });

  const userName = `${user?.info.firstName} ${user?.info.surname}`;

  const queryClient = useQueryClient();

  const { handleUserToggleLikeThePost } = usePost();

  const { mutate } = useMutation(
    () => handleUserToggleLikeThePost(postItems._id, user?._id as IUser['_id']),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['all-posts']);
        setIsUserLikeThePost((prevState) => !prevState);
      }
    }
  );

  return (
    <Container>
      <Header>
        <UserPictureProfile
          pictureProfileSRC={user?.info.pictureProfile}
          userName={userName}
          width='35'
          height='35'
        />
        <AdditionalInformation>
          <CreatedByContainer>
            <CreatedBy>{postItems.createdByUserId}</CreatedBy>
          </CreatedByContainer>
          <PublicationDate>
            {resolvePostCreatedAt(postItems.createdAt)}
          </PublicationDate>
        </AdditionalInformation>
      </Header>
      <Content>
        <Text>
          {postItems.text}
        </Text>
        <Image
          src='/backgrounds/florest.png'
          alt={postItems.text}
          draggable={false}
          fill
        />
      </Content>
      <ActionsContainer>
        <StyledToggleButton
          value={isUserLikeThePost}
          onClick={() => mutate()}
        >
          <StyledBadge badgeContent={postItems.likes.quantity} >
            {isUserLikeThePost ? <EnabledLikeIcon /> : <DisabledLikeIcon />}
          </StyledBadge>
          Apoio
        </StyledToggleButton>
        <StyledToggleButton value={true}>
          <StyledBadge badgeContent={postItems.comments.length}>
            <CommentIcon />
          </StyledBadge>
          Comentar
        </StyledToggleButton>
      </ActionsContainer>
    </Container>
  );
};

export default Post;
