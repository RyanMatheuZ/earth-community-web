import type { IUser, IPost, IGroup } from '@ts/interfaces';

export type SendCommentParams = {
  postId: IPost['_id'];
  userId: IUser['_id'];
  comment: string;
}

export type CreatePostParams = {
  userId: IUser['_id'];
  groupId: IGroup['_id'];
  postValues: Pick<IPost, 'image' | 'text'>;
}
