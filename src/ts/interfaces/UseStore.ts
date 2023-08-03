import type { IAuthContext } from '@ts/interfaces';

export interface IState {
  user: IAuthContext['user'];
}

export interface IActions {
  handlePersistUserData: (user: IAuthContext['user']) => void;
  handleCleanUserData: () => void;
}
