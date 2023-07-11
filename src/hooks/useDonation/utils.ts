import type { IDonation, IPagination } from '@ts/interfaces';
import type { TInfoPayer } from '@ts/types';

export type ResponseGetAllDonations = {
  donations: Array<{
    body: IDonation;
    infoPayer: TInfoPayer;
  }>;
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
