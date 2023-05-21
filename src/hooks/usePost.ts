import { useCallback } from 'react';

import { type AxiosResponse } from 'axios';

import { useInfiniteQuery } from '@tanstack/react-query';

import type { IPost } from '@ts/interfaces';

import axiosInstance from '@services/axios';

import { catchError } from '@utils/requestMessages';

const usePost = () => {
  const ENDPOINT = '/post';

  const handleGetAllPosts = useCallback(() => {
    return useInfiniteQuery(
      ['all-posts'],
      async ({ pageParam = 1 }): Promise<IPost[] | undefined> => {
        try {
          axiosInstance.interceptors.response.clear();

          const { data }: AxiosResponse<{ posts: IPost[] }> = await axiosInstance.get(
            `${ENDPOINT}/get-all?perPage=10&page=${pageParam}`
          );

          return data.posts;
        } catch (e) {
          catchError(e);
        }
      },
      {
        getNextPageParam: (lastPage, allPages) => {
          return lastPage?.length ? allPages.length + 1 : undefined;
        }
      }
    );
  }, []);

  const handleUserToggleLikeThePost = useCallback(async (postId: string, userId: string) => {
    try {
      await axiosInstance.post(`${ENDPOINT}/like/${postId}/${userId}`);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return {
    handleGetAllPosts,
    handleUserToggleLikeThePost
  };
};

export default usePost;
