import type { IUser } from '@ts/interfaces';

export type UpdatedUserParams = {
  userId: IUser['_id'];
  userUpdatedValues: Pick<IUser, 'info' | 'address'>;
};
