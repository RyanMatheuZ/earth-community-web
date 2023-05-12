import { useState, useContext, createContext, type FC, type PropsWithChildren } from 'react';

import type { IAuthContext, ISignUp, ISignIn } from '@ts/interfaces';

import axiosInstance from '@services/axios';

import { authContextDefaultValues, unauthenticatedRoutes } from './utils';

const AuthContext = createContext<IAuthContext>(authContextDefaultValues);

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const ENDPOINT = '/auth/user';

  const [isLoadingSignUp, setIsLoadingSignUp] = useState(false);
  const [isLoadingSignIn, setIsLoadingSignIn] = useState(false);

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
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingSignUp(false);
    }
  };

  const handleSignIn = async (signInValues: ISignIn) => {
    try {
      setIsLoadingSignIn(true);
      await axiosInstance.post(`${ENDPOINT}/sign-in`, {
        info: {
          email: signInValues.email,
        },
        security: {
          password: signInValues.password,
        }
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingSignIn(false);
    }
  };

  return (
    <AuthContext.Provider value={{
      unauthenticatedRoutes,
      isLoadingSignUp,
      isLoadingSignIn,
      handleSignUp,
      handleSignIn
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
