import { z } from 'zod';

import { capitalizeWord } from '@utils/transforms/capitalizeWord';

const schema = {
  firstName: z
    .string()
    .nonempty('O primeiro nome é obrigatório!')
    .trim()
    .transform((firstName) => capitalizeWord(firstName)),
  surname: z
    .string()
    .nonempty('O sobrenome é obrigatório!')
    .trim()
    .transform((surname) => capitalizeWord(surname)),
  email: z
    .string()
    .email('O e-mail deve ser válido!')
    .trim(),
  cpf: z
    .string()
    .nonempty('O CPF é obrigatório!')
    .trim(),
  password: z
    .string()
    .nonempty('A senha é obrigatória!')
    .min(8, 'A senha deve ter no mínimo 8 caracteres!')
    .trim(),
  confirmPassword: z
    .string()
    .nonempty('A confirmação de senha é obrigatória!')
    .trim()
};

export const {
  firstName,
  surname,
  email,
  cpf,
  password,
  confirmPassword
} = schema;
