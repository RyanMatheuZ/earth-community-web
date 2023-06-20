import { useState, useContext, createContext, type FC, type PropsWithChildren } from 'react';

import { useRouter } from 'next/router';

import { type AxiosResponse } from 'axios';

import type { IAuthContext, IAuthOptions, ISignUp, ISignIn, IUser } from '@ts/interfaces';

import axiosInstance from '@services/axios';

import useUserStore from '@services/zustand';

import { authContextDefaultValues, unauthenticatedRoutes } from './utils';

const AuthContext = createContext<IAuthContext>(authContextDefaultValues);

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const ENDPOINT = '/auth/user';

  const { push, replace } = useRouter();

  const { user, handlePersistUserData, handleCleanUserData } = useUserStore();

  const [isLoadingSignUp, setIsLoadingSignUp] = useState(false);
  const [isLoadingSignIn, setIsLoadingSignIn] = useState(false);

  const handlePersistUserDataAndRedirectToFeed = (userData: IUser) => {
    handlePersistUserData(userData);
    push('/feed');
  };

  const handleSignUp = async (signUpValues: ISignUp & IAuthOptions) => {
    try {
      setIsLoadingSignUp(true);
      const { data }: AxiosResponse<{ user: IUser }> = await axiosInstance.post(`${ENDPOINT}/sign-up`, {
        info: {
          firstName: signUpValues.firstName,
          surname: signUpValues.surname,
          email: signUpValues.email,
        },
        security: {
          password: signUpValues.password,
          confirmPassword: signUpValues.confirmPassword,
          authWith: signUpValues.authWith
        }
      });
      handlePersistUserDataAndRedirectToFeed(data.user);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingSignUp(false);
    }
  };

  const handleSignIn = async (signInValues: ISignIn) => {
    try {
      setIsLoadingSignIn(true);
      const { data }: AxiosResponse<{ user: IUser }> = await axiosInstance.post(`${ENDPOINT}/sign-in`, {
        info: {
          email: signInValues.email,
        },
        security: {
          password: signInValues.password
        }
      });
      handlePersistUserDataAndRedirectToFeed(data.user);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingSignIn(false);
    }
  };

  const handleSignOut = () => {
    replace('/welcome');
    handleCleanUserData();
  };

  return (
    <AuthContext.Provider value={{
      user,
      unauthenticatedRoutes,
      isLoadingSignUp,
      isLoadingSignIn,
      handleSignUp,
      handleSignIn,
      handleSignOut
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
