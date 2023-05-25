import { useEffect, useRef, type FC } from 'react';

import { DialogContent, DialogContentText } from '@mui/material';

import type { IPost } from '@ts/interfaces';

import Header from './Header';
import NoComments from './NoComments';
import CommentBox from './CommentBox';
import FieldToComment from './FieldToComment';

import * as S from './styles';

interface PostCommentsProps {
  isDialogOpen: boolean;
  handleToggleDialog: () => void;
  postItem: IPost;
}

const PostComments: FC<PostCommentsProps> = ({ isDialogOpen, handleToggleDialog, postItem }) => {
  const descriptionElementRef = useRef<HTMLElement>(null);

  const authorPost = `${postItem.createdByUser.info.firstName} ${postItem.createdByUser.info.surname}`;

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
      <Header authorPost={authorPost} />
      <DialogContent dividers={true}>
        <DialogContentText
          ref={descriptionElementRef}
          tabIndex={-1}
        >
          {!postItem.comments?.length && <NoComments />}
          {postItem.comments?.map((comment, index) => (
            <CommentBox
              key={`comment-${comment}-${comment._id}-${index}`}
              comment={comment}
              postId={postItem._id}
            />
          ))}
        </DialogContentText>
      </DialogContent>
      <FieldToComment postId={postItem._id} />
    </S.Container>
  );
};

export default PostComments;
