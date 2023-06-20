/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback } from 'react';

import { type AxiosResponse } from 'axios';

import { useInfiniteQuery } from '@tanstack/react-query';

import type { IPost } from '@ts/interfaces';

import axiosInstance from '@services/axios';

import { catchError } from '@utils/requestMessages';

import { type SendCommentParams, type CreatePostParams } from './utils';

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
        },
        refetchIntervalInBackground: true,
        refetchInterval: 60 * 1000
      }
    );
  }, []);

  const handleGetAllPostsByGroupId = useCallback((groupId: string) => {
    return useInfiniteQuery(
      ['all-posts-by-group-id'],
      async ({ pageParam = 1 }): Promise<IPost[] | undefined> => {
        try {
          axiosInstance.interceptors.response.clear();

          const { data }: AxiosResponse<{ posts: IPost[] }> = await axiosInstance.get(
            `${ENDPOINT}/get-group-by-id/${groupId}?perPage=10&page=${pageParam}`
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

  const handleCreatePost = useCallback(async ({ userId, groupId, postValues }: CreatePostParams) => {
    try {
      await axiosInstance.post(`${ENDPOINT}/create/${userId}/${groupId}`, postValues);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleUserToggleLikeThePost = useCallback(async (postId: string, userId: string) => {
    try {
      await axiosInstance.post(`${ENDPOINT}/like/${postId}/${userId}`);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleUserSendComment = useCallback(async ({ postId, userId, comment }: SendCommentParams) => {
    try {
      await axiosInstance.post(`${ENDPOINT}/comment/${postId}/${userId}`, {
        comment
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleUserDeleteComment = useCallback(async (postId: string, commentId: string) => {
    try {
      await axiosInstance.delete(`${ENDPOINT}/delete-comment/${postId}/${commentId}`);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return {
    handleGetAllPosts,
    handleGetAllPostsByGroupId,
    handleCreatePost,
    handleUserToggleLikeThePost,
    handleUserSendComment,
    handleUserDeleteComment
  };
};

export default usePost;
