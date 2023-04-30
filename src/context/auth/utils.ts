import type { IAuthContext } from '@ts/interfaces';

export const unauthenticatedRoutes: string[] = [
  '/welcome',
  '/about',
  '/donate-now',
  '/sign-in',
  '/sign-up'
];

export const authContextDefaultValues: IAuthContext = {
  unauthenticatedRoutes,
  isLoadingSignUp: false,
  isLoadingSignIn: false,
  handleSignUp: () => Promise.resolve(),
  handleSignIn: () => Promise.resolve()
};
