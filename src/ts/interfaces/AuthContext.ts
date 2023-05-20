import type { IUser, ISignUp, ISignIn } from '@ts/interfaces';

interface IAuthContext {
  user: IUser | null;
  unauthenticatedRoutes: string[];
  isLoadingSignUp: boolean;
  isLoadingSignIn: boolean;
  handleSignUp: (signUpValues: ISignUp) => Promise<void>;
  handleSignIn: (signInValues: ISignIn) => Promise<void>;
  handleSignOut: () => void;
}

export default IAuthContext;
