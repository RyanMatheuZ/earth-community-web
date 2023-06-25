import { useState, type FC } from 'react';

import { useRouter } from 'next/router';

import { useMutation } from '@tanstack/react-query';

import type { IComment } from '@ts/interfaces';

import { useAuth } from '@context/auth';

import { usePost } from '@hooks/index';

import { queryClient } from '@services/tanstackQuery';

import { ActionsModal, UserPictureProfile } from '@components/elements';

import { resolveCreatedAt } from '@utils/post';

import { isCommentOwner } from './utils';

import * as S from './styles';

interface CommentBoxProps {
  comment: IComment;
  postId: string;
}

const CommentBox: FC<CommentBoxProps> = ({ comment, postId }) => {
  const { pathname } = useRouter();
  const { user } = useAuth();
  const { handleUserDeleteComment } = usePost();

  const [isOpenModal, setIsOpenModal] = useState(false);

  const authorName = `${comment.user.info.firstName} ${comment.user.info.surname}`;

  const showDeleteButton = isCommentOwner(String(user?._id), comment.user._id);

  const handleToggleModal = () => {
    setIsOpenModal((prevState) => !prevState);
  };

  const { mutate, isLoading } = useMutation(
    ({ postId, commentId }: { postId: string, commentId: string }) => handleUserDeleteComment(postId, commentId),
    {
      onSuccess: async () => {
        const query = pathname === '/feed' ? 'all-posts' : 'all-posts-by-group-id';
        await queryClient.invalidateQueries([query]);
        handleToggleModal();
      }
    }
  );

  return (
    <>
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
              onClick={handleToggleModal}
            >
              <S.DeleteIcon />
            </S.DeleteButton>
          )}
        </S.Comment>
      </S.Container>
      <ActionsModal
        isOpen={isOpenModal}
        handleToggleModal={handleToggleModal}
        handleBackButton={handleToggleModal}
        handleConfirmButton={() => mutate({ postId, commentId: comment._id })}
        message={'Você realmente deseja excluir o comentário?\n Essa ação é irreversível!'}
        isLoading={isLoading}
      />
    </>
  );
};

export default CommentBox;
