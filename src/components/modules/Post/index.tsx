import { useState, type FC } from 'react';

import { useQueryClient, useMutation } from '@tanstack/react-query';

import type { IPost } from '@ts/interfaces';

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

const Post: FC<PostProps> = ({ postItems, postType }) => {
  const [isUserLikeThePost, setIsUserLikeThePost] = useState<boolean>(false);

  const queryClient = useQueryClient();

  const { handleUserToggleLikeThePost } = usePost();

  const { mutate } = useMutation(
    () => handleUserToggleLikeThePost(postItems._id, '38947hirj393'),
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
          pictureProfileSRC=''
          userName=''
          width='35'
          height='35'
        />
        <AdditionalInformation>
          <CreatedByContainer>
            <CreatedBy>Amigos da Mulekada</CreatedBy>
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
          src='https://img.freepik.com/fotos-gratis/foto-aerea-aerea-de-uma-floresta-densa-com-belas-arvores-e-vegetacao_181624-2812.jpg?w=996&t=st=1684526556~exp=1684527156~hmac=2ef5bb7806b9b4e0a3781a3c8321cae51711be2d9c949c8e3c1dbe463e4e8f54'
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
