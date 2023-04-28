import { useState, useContext, createContext, type FC, type PropsWithChildren } from 'react';

import type { IAuthContext, ISignUp } from '@ts/interfaces';

import axiosInstance from '@services/axios';

import { authContextDefaultValues, unauthenticatedRoutes } from './utils';

const AuthContext = createContext<IAuthContext>(authContextDefaultValues);

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const ENDPOINT = '/auth/user';

  const [isLoadingSignUp, setIsLoadingSignUp] = useState(false);

  const handleSignUp = async (signUpValues: ISignUp) => {
    try {
      setIsLoadingSignUp(true);
      await axiosInstance.post(`${ENDPOINT}/sign-up`, {
        info: {
          firstName: signUpValues.firstName,
          surname: signUpValues.surname,
          email: signUpValues.email,
        },
        security: {
          password: signUpValues.password,
          confirmPassword: signUpValues.confirmPassword
        }
      });
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoadingSignUp(false);
    }
  };

  return (
    <AuthContext.Provider value={{
      unauthenticatedRoutes,
      isLoadingSignUp,
      handleSignUp
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
