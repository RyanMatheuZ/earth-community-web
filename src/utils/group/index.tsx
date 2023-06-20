import type { IGroup } from '@ts/interfaces';

export const isGroupOwner = (userId: string, createdByUserId: string): boolean => {
  return userId === createdByUserId;
};

export const isUserGroupMember = (userId: string, members: IGroup['members']): boolean => {
  return members?.some(({ user }) => userId === user?._id);
};
