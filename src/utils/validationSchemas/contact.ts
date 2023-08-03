import { z } from 'zod';

import { capitalizeWord } from '@utils/transforms/capitalizeWord';

const schema = {
  name: z
    .string()
    .nonempty('O nome é obrigatório!')
    .trim()
    .transform((firstName) => capitalizeWord(firstName)),
  email: z
    .string()
    .email('O e-mail deve ser válido!')
    .trim(),
  company: z
    .string()
    .trim()
    .optional()
    .transform((firstName) => capitalizeWord(firstName || '')),
  whoAreYou: z
    .string()
    .nonempty('É obrigatório sabermos quem é você!')
    .trim(),
  subject: z
    .string()
    .nonempty('O assunto é obrigatório!')
    .trim(),
  message: z
    .string()
    .nonempty('A mensagem é obrigatória!')
    .trim()
};

export const {
  name,
  email,
  company,
  whoAreYou,
  subject,
  message
} = schema;
