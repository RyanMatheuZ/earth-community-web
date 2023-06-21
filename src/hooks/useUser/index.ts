/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback } from 'react';

import { type AxiosResponse } from 'axios';

import { useQuery } from '@tanstack/react-query';

import type { IUser } from '@ts/interfaces';

import axiosInstance from '@services/axios';
import useUseStore from '@services/zustand';

import { catchError } from '@utils/requestMessages';

import { type UpdatedUserParams } from './utils';

const useUser = () => {
  const ENDPOINT = '/user';

  const { handlePersistUserData } = useUseStore();

  const handleGetUserByNickName = useCallback((nickName: string) => {
    return useQuery(
      ['user-by-nick-name', nickName],
      async () => {
        try {
          axiosInstance.interceptors.response.clear();

          const { data }: AxiosResponse<{ user: IUser }> = await axiosInstance.get(
            `${ENDPOINT}/get-by-nickname/${nickName}`
          );

          return data.user;
        } catch (e) {
          catchError(e);
        }
      },
      {
        refetchIntervalInBackground: true,
        refetchInterval: 60 * 1000
      }
    );
  }, []);

  const handleUpdateUser = useCallback(async ({ userId, userUpdatedValues }: UpdatedUserParams) => {
    try {
      const { data }: AxiosResponse<{ user: IUser }> = await axiosInstance.patch(
        `${ENDPOINT}/update-by-id/${userId}`, userUpdatedValues
      );

      handlePersistUserData(data.user);
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    handleGetUserByNickName,
    handleUpdateUser
  };
};

export default useUser;
