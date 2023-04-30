import type { ISignUp, ISignIn } from '@ts/interfaces';

interface IAuthContext {
  unauthenticatedRoutes: string[];
  isLoadingSignUp: boolean;
  isLoadingSignIn: boolean;
  handleSignUp: (signUpValues: ISignUp) => Promise<void>;
  handleSignIn: (signInValues: ISignIn) => Promise<void>;
}

export default IAuthContext;
