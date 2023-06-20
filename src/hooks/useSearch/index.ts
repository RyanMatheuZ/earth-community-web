/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback } from 'react';

import { type AxiosResponse } from 'axios';

import { useQuery } from '@tanstack/react-query';

import axiosInstance from '@services/axios';

import { catchError } from '@utils/requestMessages';

import { type SearchResults } from './utils';

const useSearch = () => {
  const handleSearch = useCallback((name: string) => {
    const ENDPOINT = '/search';

    return useQuery(
      ['search', name],
      async () => {
        try {
          axiosInstance.interceptors.response.clear();

          const { data }: AxiosResponse<{ result: SearchResults }> = await axiosInstance.get(
            `${ENDPOINT}?name=${name}`
          );

          return data.result;
        } catch (e) {
          catchError(e);
        }
      }
    );
  }, []);

  return {
    handleSearch
  };
};

export default useSearch;
