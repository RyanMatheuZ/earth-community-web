import type { IDonation } from '@ts/interfaces';
import type { TInfoPayer } from '@ts/types';

export type ResponseGetAllDonations = {
  donations: Array<{
    body: IDonation;
    infoPayer: TInfoPayer;
  }>;
};
