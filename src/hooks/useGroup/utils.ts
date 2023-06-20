import type { IUser, IGroup } from '@ts/interfaces';

export type CreateGroupParams = {
  userId: IUser['_id'];
  groupValues: Pick<IGroup, 'image' | 'name' | 'category' | 'description' | 'headOffice'>;
}

export type ActionGroupParams = {
  groupId: IGroup['_id'];
  userId: IUser['_id'];
}
