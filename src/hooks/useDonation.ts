import { useState, useCallback } from 'react';

import { type AxiosResponse } from 'axios';

import { useAuth } from '@context/auth';

import axiosInstance from '@services/axios';

import type { IDonation, IGiver } from '@ts/interfaces';

const useDonation = () => {
  const ENDPOINT = '/donation';

  const { user } = useAuth();

  const [donation, setDonation] = useState<IDonation>();
  const [isLoadingDonation, setIsLoadingDonation] = useState<boolean>(false);

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

  return {
    handleCreateDonation,
    donation,
    isLoadingDonation
  };
};

export default useDonation;
