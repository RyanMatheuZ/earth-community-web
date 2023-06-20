import { zodResolver } from '@hookform/resolvers/zod';

import { z } from 'zod';

import type { IPost } from '@ts/interfaces';

import * as postValidationSchema from '@utils/validationSchemas/post';

export interface PostDefaultValues {
  image: IPost['image'],
  text: IPost['text']
}

export const postDefaultValues: PostDefaultValues = {
  image: '',
  text: ''
};

export const schema = zodResolver(
  z.object({
    ...postValidationSchema
  })
);
