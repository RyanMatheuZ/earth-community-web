import { z } from 'zod';

import { MAX_FILE_SIZE, ACCEPTED_IMAGE_TYPES } from './utils';

const schema = {
  image: z
    .any()
    .refine((files) => !!files?.[0], 'A imagem da publicação é obrigatória!')
    .refine((files) => !(files?.[0]?.size >= MAX_FILE_SIZE), 'O tamanho máximo da imagem deve ser 5MB!')
    .refine(
      (files) => typeof files !== 'string' ? ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type) : true,
      'Apenas .jpg, .jpeg, .png and .webp são aceitos!'
    ),
  text: z
    .string()
    .nonempty('O texto da publicação é obrigatório!')
    .trim()
};

export const {
  image,
  text
} = schema;
