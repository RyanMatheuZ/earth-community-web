import type { IUser, IPost } from '@ts/interfaces';

export type SendCommentParams = {
  postId: IPost['_id'];
  userId: IUser['_id'];
  comment: string;
}
