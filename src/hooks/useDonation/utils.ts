import type { IDonation, IPagination } from '@ts/interfaces';
import type { TInfoPayer } from '@ts/types';

export type ResponseGetAllDonations = IPagination & {
  donations: Array<{
    body: IDonation;
    infoPayer: TInfoPayer;
  }>;
  info: {
    totalAmountDonated: number;
  };
};

export type ResponseGetAllDonationsByUserId = IPagination & {
  donations: IDonation[];
  info: {
    approvedAmount: number;
    cancelledAmount: number;
    inProcessAmount: number;
    pendingAmount: number;
    totalAmountDonated: number;
  };
};
