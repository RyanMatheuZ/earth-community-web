import type { IUser } from '@ts/interfaces';

import { type CategoriesOptions } from '@utils/datas/categories/utils';

interface IGroup {
  _id: string;
  image: string;
  name: string;
  description: string;
  category: CategoriesOptions;
  headOffice: {
    city: string;
    state: string;
  },
  members: Array<{
    user: IUser;
  }>;
  createdByUser: {
    user: IUser;
  };
  createdAt: Date;
}

export default IGroup;
