import type { IGroup, IUser } from '@ts/interfaces';

export interface IComment {
  _id: string;
  user: IUser;
  comment: string;
  createdAt: Date;
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
  createdByUser: {
    user: IUser;
  };
  createdByGroup: IGroup;
  createdAt: Date;
}
