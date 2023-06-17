import type { IUser } from '@ts/interfaces';

interface IGroup {
  _id: string;
  image: string;
  name: string;
  description: string;
  category: string;
  headOffice: {
    city: string,
    state: string
  },
  memberIds: number[];
  createdByUser: IUser;
  createdAt: Date;
}

export default IGroup;
