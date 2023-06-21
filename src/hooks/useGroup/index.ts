/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback } from 'react';

import { type AxiosResponse } from 'axios';

import { useQuery } from '@tanstack/react-query';

import type { IGroup } from '@ts/interfaces';

import axiosInstance from '@services/axios';

import { catchError } from '@utils/requestMessages';

import { type CreateGroupParams, type ActionGroupParams } from './utils';

const useGroup = () => {
  const ENDPOINT = '/group';

  const handleGetAllGroups = useCallback(() => {
    return useQuery(
      ['all-groups'],
      async () => {
        try {
          axiosInstance.interceptors.response.clear();

          const { data }: AxiosResponse<{ groups: IGroup[] }> = await axiosInstance.get(
            `${ENDPOINT}/get-all`
          );

          return data.groups;
        } catch (error) {
          catchError(error);
        }
      }
    );
  }, []);

  const handleGetAllTrendingGroups = useCallback(() => {
    return useQuery(
      ['all-trending-groups'],
      async () => {
        try {
          axiosInstance.interceptors.response.clear();

          const { data }: AxiosResponse<{ groups: IGroup[] }> = await axiosInstance.get(
            `${ENDPOINT}/trending-groups`
          );

          return data.groups;
        } catch (error) {
          catchError(error);
        }
      }
    );
  }, []);

  const handleGetGroupById = useCallback((groupId: IGroup['_id']) => {
    return useQuery(
      ['group-by-id', groupId],
      async () => {
        try {
          axiosInstance.interceptors.response.clear();

          const { data }: AxiosResponse<{ group: IGroup }> = await axiosInstance.get(
            `${ENDPOINT}/get-by-id/${groupId}`
          );

          return data.group;
        } catch (error) {
          catchError(error);
        }
      }
    );
  }, []);

  const handleGetGroupByUserId = useCallback((userId: string) => {
    return useQuery(
      ['group-by-user-id', userId],
      async () => {
        try {
          axiosInstance.interceptors.response.clear();

          const { data }: AxiosResponse<{ groups: IGroup[] }> = await axiosInstance.get(
            `${ENDPOINT}/get-by-user-id/${userId}`
          );

          return data.groups;
        } catch (error) {
          catchError(error);
        }
      }
    );
  }, []);

  const handleCreateGroup = useCallback(async ({ userId, groupValues }: CreateGroupParams) => {
    try {
      await axiosInstance.post(`${ENDPOINT}/create/${userId}`, groupValues);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleDeleteGroup = useCallback(async ({ groupId, userId }: ActionGroupParams) => {
    try {
      await axiosInstance.delete(`${ENDPOINT}/delete/${groupId}/${userId}`);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleAddMemberGroup = useCallback(async ({ groupId, userId }: ActionGroupParams) => {
    try {
      await axiosInstance.post(`${ENDPOINT}/add-member/${groupId}/${userId}`);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleRemoveMemberGroup = useCallback(async ({ groupId, userId }: ActionGroupParams) => {
    try {
      await axiosInstance.delete(`${ENDPOINT}/remove-member/${groupId}/${userId}`);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return {
    handleGetAllGroups,
    handleGetAllTrendingGroups,
    handleGetGroupById,
    handleGetGroupByUserId,
    handleCreateGroup,
    handleDeleteGroup,
    handleAddMemberGroup,
    handleRemoveMemberGroup
  };
};

export default useGroup;
