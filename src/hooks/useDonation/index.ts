/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useCallback } from 'react';

import { useQuery, useInfiniteQuery } from '@tanstack/react-query';

import { type AxiosResponse } from 'axios';

import type { IDonation, IGiver } from '@ts/interfaces';

import { useAuth } from '@context/auth';

import axiosInstance from '@services/axios';

import { catchError } from '@utils/requestMessages';

import type { ResponseGetAllDonations, ResponseGetAllDonationsByUserId } from './utils';

const useDonation = () => {
  const ENDPOINT = '/donation';

  const { user } = useAuth();

  const [donation, setDonation] = useState<IDonation>();
  const [isLoadingDonation, setIsLoadingDonation] = useState(false);
  const [totalAmountDonated, setTotalDonatedAmount] = useState(0);

  const handleCreateDonation = useCallback(async (giverValues: IGiver) => {
    const FORMATTED_ENDPOINT = user?._id ? `${ENDPOINT}/${user?._id}` : ENDPOINT;

    try {
      setIsLoadingDonation(true);

      const { data }: AxiosResponse<{ response: IDonation }> = await axiosInstance.post(FORMATTED_ENDPOINT, {
        transaction_amount: giverValues.transaction_amount,
        description: giverValues.description,
        payment_method_id: giverValues.payment_method_id,
        payer: {
          email: giverValues.payer.email,
          first_name: giverValues.payer.first_name,
          last_name: giverValues.payer.last_name,
          identification: {
            type: giverValues.payer.identification.type,
            number: giverValues.payer.identification.number
          }
        },
        address: {
          zip_code: giverValues.address.zip_code,
          street_name: giverValues.address.street_name,
          street_number: giverValues.address.street_number,
          neighborhood: giverValues.address.neighborhood,
          city: giverValues.address.city,
          federal_unit: giverValues.address.federal_unit
        }
      });

      setDonation(data.response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingDonation(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGetAllDonations = useCallback(() => {
    return useInfiniteQuery(
      ['all-donations'],
      async ({ pageParam = 1 }) => {
        try {
          axiosInstance.interceptors.response.clear();

          const { data }: AxiosResponse<ResponseGetAllDonations> = await axiosInstance.get(
            `${ENDPOINT}/get-all?perPage=10&page=${pageParam}`
          );

          setTotalDonatedAmount(data.info.totalAmountDonated);

          return data.donations;
        } catch (error) {
          console.error(error);
        }
      },
      {
        getNextPageParam: (lastPage, allPages) => {
          return lastPage?.length ? allPages.length + 1 : undefined;
        }
      }
    );
  }, []);

  const handleGetDonationById = useCallback((donationId: number) => {
    return useQuery(
      ['donation-by-id', donationId],
      async () => {
        try {
          axiosInstance.interceptors.response.clear();

          const { data }: AxiosResponse<{ donation: { body: IDonation } }> = await axiosInstance.get(
            `${ENDPOINT}/get-by-id/${donationId}`
          );

          return data.donation;
        } catch (error) {
          catchError(error);
        }
      }
    );
  }, []);

  const handleGetAllDonationsByUserId = useCallback((userId: string) => {
    return useQuery(
      ['all-donations-by-user-id', userId],
      async () => {
        try {
          axiosInstance.interceptors.response.clear();

          const { data }: AxiosResponse<ResponseGetAllDonationsByUserId> = await axiosInstance.get(
            `${ENDPOINT}/get-by-user-id/${userId}?perPage=20&page=0`
          );

          return data;
        } catch (error) {
          catchError(error);
        }
      }
    );
  }, []);

  return {
    handleCreateDonation,
    handleGetAllDonations,
    handleGetDonationById,
    handleGetAllDonationsByUserId,
    donation,
    totalAmountDonated,
    isLoadingDonation
  };
};

export default useDonation;
