import { zodResolver } from '@hookform/resolvers/zod';

import { z } from 'zod';

import type { IGroup } from '@ts/interfaces';

import * as groupValidationSchema from '@utils/validationSchemas/group';
import { city, state } from '@utils/validationSchemas/address';

export interface GroupDefaultValues {
  image: IGroup['image'],
  name: IGroup['name'],
  description: IGroup['description'],
  category: IGroup['category'],
  city: IGroup['headOffice']['city'];
  state: IGroup['headOffice']['state'];
}

export const groupDefaultValues: GroupDefaultValues = {
  image: '',
  name: '',
  description: '',
  category: '' as IGroup['category'],
  city: '',
  state: ''
};

export const schema = zodResolver(
  z.object({
    ...groupValidationSchema,
    city,
    state
  })
);
