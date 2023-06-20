/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback } from 'react';

import { type AxiosResponse } from 'axios';

import { useQuery } from '@tanstack/react-query';

import type { IAchievements } from '@ts/interfaces';

import axiosInstance from '@services/axios';

import { catchError } from '@utils/requestMessages';

const useAchievements = () => {
  const handleGetAllAchievements = useCallback((userId: string) => {
    const ENDPOINT = '/achievement';

    return useQuery(
      ['achievements', userId],
      async () => {
        try {
          axiosInstance.interceptors.response.clear();

          const { data }: AxiosResponse<IAchievements['achievements']> = await axiosInstance.post(
            `${ENDPOINT}/${userId}
          `);

          return data;
        } catch (e) {
          catchError(e);
        }
      }
    );
  }, []);

  return {
    handleGetAllAchievements
  };
};

export default useAchievements;
