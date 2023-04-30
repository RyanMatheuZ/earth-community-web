import { zodResolver } from '@hookform/resolvers/zod';

import { z } from 'zod';

import type { ISignIn } from '@ts/interfaces';

import { email, password } from '@utils/validationSchemas/user';

export const signInDefaultValues: ISignIn = {
  email: '',
  password: ''
};

export const schema = zodResolver(
  z.object({
    email,
    password
  })
);
