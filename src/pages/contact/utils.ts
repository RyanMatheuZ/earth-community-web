import { zodResolver } from '@hookform/resolvers/zod';

import { z } from 'zod';

import type { IContact } from '@ts/interfaces';

import * as contactValidationSchema from '@utils/validationSchemas/contact';

export const contactDefaultValues: IContact = {
  name: '',
  email: '',
  company: '',
  whoAreYou: '' as IContact['whoAreYou'],
  subject: '' as IContact['subject'],
  message: ''
};

export const schema = zodResolver(
  z.object({
    ...contactValidationSchema
  })
);
