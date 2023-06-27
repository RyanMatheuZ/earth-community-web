import type { IUser, IAuthOptions, ISignUp, ISignIn } from '@ts/interfaces';

interface IAuthContext {
  user: IUser | null;
  isLoadingSignUp: boolean;
  isLoadingSignIn: boolean;
  handleSignUp: (signUpValues: ISignUp & IAuthOptions) => Promise<void>;
  handleSignIn: (signInValues: ISignIn) => Promise<void>;
  handleSignOut: () => void;
}

export default IAuthContext;
