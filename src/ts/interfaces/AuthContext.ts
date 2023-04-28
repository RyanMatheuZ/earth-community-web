import type { ISignUp } from '@ts/interfaces';

interface IAuthContext {
  unauthenticatedRoutes: string[];
  isLoadingSignUp: boolean;
  handleSignUp: (signUpValues: ISignUp) => Promise<void>;
}

export default IAuthContext;
