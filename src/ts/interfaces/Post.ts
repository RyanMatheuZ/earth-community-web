import type { IUser } from '@ts/interfaces';

export interface IComment {
  _id: string;
  user: IUser;
  comment: string;
}

export interface IPost {
  _id: string;
  text: string;
  image: string;
  comments?: IComment[];
  likes: {
    quantity: number;
    userIds: string[];
  };
  createdByUser: IUser;
  createdAt: Date;
}
