import { z } from 'zod';

import { capitalizeWord } from '@utils/transforms/capitalizeWord';

const MAX_FILE_SIZE = 5000000; // 5mb, value in byte
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

const schema = {
  pictureProfile: z
    .any()
    .refine((files) => !!files?.[0], 'A foto de perfil é obrigatória!')
    .refine((files) => !(files?.[0]?.size >= MAX_FILE_SIZE), 'O tamanho máximo da foto deve ser 5MB!')
    .refine(
      (files) => typeof files !== 'string' ? ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type) : true,
      'Apenas .jpg, .jpeg, .png and .webp são aceitos!'
    ),
  nickName: z
    .string()
    .nonempty('O nome de usuário é obrigatório!')
    .trim(),
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
  phone: z
    .string()
    .nonempty('O número de celular é obrigatório!')
    .trim(),
  email: z
    .string()
    .email('O e-mail deve ser válido!')
    .trim(),
  dateOfBirth: z
    .date({
      invalid_type_error: 'A data de nascimento deve ser válida!',
      required_error: 'A data de nascimento é obrigatória!'
    })
    .min(new Date(1900, 0, 1), 'A data mínima é 01/01/1900!')
    .max(new Date(), 'A data não deve ser futura!'),
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
  pictureProfile,
  nickName,
  firstName,
  surname,
  phone,
  email,
  dateOfBirth,
  cpf,
  password,
  confirmPassword
} = schema;
