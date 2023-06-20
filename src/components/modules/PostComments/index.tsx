import { type FC } from 'react';

import type { IPost } from '@ts/interfaces';

import { StyledModal } from '@components/elements';

import NoComments from './NoComments';
import CommentBox from './CommentBox';
import FieldToComment from './FieldToComment';

interface PostCommentsProps {
  isOpenModal: boolean;
  handleToggleModal: () => void;
  postItem: IPost;
}

const PostComments: FC<PostCommentsProps> = ({ isOpenModal, handleToggleModal, postItem }) => {
  const authorPost = `${postItem.createdByUser.info.firstName} ${postItem.createdByUser.info.surname}`;

  return (
    <StyledModal
      isOpen={isOpenModal}
      handleToggleModal={handleToggleModal}
      modalTitle={`Publicação de ${authorPost}`}
      content={
        <>
          {postItem.comments?.map((comment, index) => (
            <CommentBox
              key={`comment-${comment}-${comment._id}-${index}`}
              comment={comment}
              postId={postItem._id}
            />
          ))}
          {!postItem.comments?.length && <NoComments />}
        </>
      }
      actions={<FieldToComment postId={postItem._id} />}
    />
  );
};

export default PostComments;
