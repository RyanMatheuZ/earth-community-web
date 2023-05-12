import { zodResolver } from '@hookform/resolvers/zod';

import { z } from 'zod';

import type { ISignUp } from '@ts/interfaces';

import { firstName, surname, email, password, confirmPassword } from '@utils/validationSchemas/user';

export const signUpDefaultValues: ISignUp = {
  firstName: '',
  surname: '',
  email: '',
  password: '',
  confirmPassword: ''
};

export const schema = zodResolver(
  z.object({
    firstName,
    surname,
    email,
    password,
    confirmPassword
  }).superRefine(({ password, confirmPassword }, { addIssue }) => {
    (confirmPassword !== password) && addIssue({
      code: 'custom',
      path: ['confirmPassword'],
      message: 'As senhas não conferem!'
    });
  })
);
