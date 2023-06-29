import type { IAuthContext } from '@ts/interfaces';

export const authContextDefaultValues: IAuthContext = {
  user: null,
  isLoadingSignUp: false,
  isLoadingSignIn: false,
  handleSignUp: () => Promise.resolve(),
  handleSignIn: () => Promise.resolve(),
  handleSignOut: () => null
};
