import { useEffect, useRef, type FC } from 'react';

import type { IPost } from '@ts/interfaces';

import { DialogContent, DialogContentText } from '@mui/material';

import { Image } from '@components/elements';

import * as S from './styles';

interface PostCommentProps {
  isDialogOpen: boolean;
  handleToggleDialog: () => void;
  comments: IPost['comments'];
}

const PostComment: FC<PostCommentProps> = ({ isDialogOpen, handleToggleDialog, comments }) => {
  const descriptionElementRef = useRef<HTMLElement>(null);

  const descriptionImage = 'Abacateiro - illustration by @Storyset';

  useEffect(() => {
    if (isDialogOpen) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [isDialogOpen]);

  return (
    <S.Container
      open={isDialogOpen}
      onClose={handleToggleDialog}
      scroll='paper'
    >
      <S.PostTitle>
        Comentários de Amigos da Mulekada
      </S.PostTitle>
      <DialogContent dividers={true}>
        <DialogContentText
          ref={descriptionElementRef}
          tabIndex={-1}
        >
          {!comments && (
            <S.NoCommentsContainer>
              <Image
                src='/illustrations/nature/avocado-tree.svg'
                alt={descriptionImage}
                title={descriptionImage}
                width='300'
                height='300'
                fill
              />
              <S.NoCommentsMessage>
                Não há comentários no momento, <br />
                seja o primeiro a comentar!
              </S.NoCommentsMessage>
            </S.NoCommentsContainer>
          )}
          {comments?.map(({ id_comment, comment }) => (
            <S.CommentContainer key={`comment-${comment}-${id_comment}`}>
              {comment}
            </S.CommentContainer>
          ))}
        </DialogContentText>
      </DialogContent>
      <S.StyledDialogActions>

      </S.StyledDialogActions>
    </S.Container>
  );
};

export default PostComment;
