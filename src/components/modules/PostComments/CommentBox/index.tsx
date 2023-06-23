import { type FC } from 'react';

import { useMutation } from '@tanstack/react-query';

import type { IComment } from '@ts/interfaces';

import { useAuth } from '@context/auth';

import { usePost } from '@hooks/index';

import { queryClient } from '@services/tanstackQuery';

import { UserPictureProfile } from '@components/elements';

import { resolveCreatedAt } from '@utils/post';

import { isCommentOwner } from './utils';

import * as S from './styles';

interface CommentBoxProps {
  comment: IComment;
  postId: string;
}

const CommentBox: FC<CommentBoxProps> = ({ comment, postId }) => {
  const { user } = useAuth();

  const { handleUserDeleteComment } = usePost();

  const authorName = `${comment.user.info.firstName} ${comment.user.info.surname}`;

  const showDeleteButton = isCommentOwner(String(user?._id), comment.user._id);

  const { mutate } = useMutation(
    ({ postId, commentId }: { postId: string, commentId: string }) => handleUserDeleteComment(postId, commentId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['all-posts']);
        queryClient.invalidateQueries(['all-posts-by-group-id']);
      }
    }
  );

  return (
    <S.Container>
      <UserPictureProfile
        pictureProfileSRC={comment.user.info.pictureProfile}
        userName={authorName}
        width='35'
        height='35'
      />
      <S.Comment>
        <S.AuthorName>
          {authorName}
        </S.AuthorName>
        {comment.comment}
        <S.CreatedAt>
          {resolveCreatedAt(comment.createdAt)}
        </S.CreatedAt>
        {showDeleteButton && (
          <S.DeleteButton
            title='Apagar mensagem?'
            onClick={() => mutate({ postId, commentId: comment._id })}
          >
            <S.DeleteIcon />
          </S.DeleteButton>
        )}
      </S.Comment>
    </S.Container>
  );
};

export default CommentBox;
