import { z } from 'zod';

import { MAX_FILE_SIZE, ACCEPTED_IMAGE_TYPES } from './utils';

const schema = {
  image: z
    .any()
    .refine((files) => !!files?.[0], 'A foto do groupo é obrigatória!')
    .refine((files) => !(files?.[0]?.size >= MAX_FILE_SIZE), 'O tamanho máximo da foto deve ser 5MB!')
    .refine(
      (files) => typeof files !== 'string' ? ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type) : true,
      'Apenas .jpg, .jpeg, .png and .webp são aceitos!'
    ),
  name: z
    .string()
    .nonempty('O nome do grupo é obrigatório!')
    .trim(),
  category: z
    .string()
    .nonempty('A categoria do grupo é obrigatória!')
    .trim(),
  description: z
    .string()
    .nonempty('A descrição do grupo é obrigatória!')
    .trim()
};

export const {
  image,
  name,
  category,
  description
} = schema;
