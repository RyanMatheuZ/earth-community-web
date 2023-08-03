import type { IDonation } from '@ts/interfaces';

import { allStatus, srcQRCode } from './utils';

export const resolveLabelStatus = (status: IDonation['status']): string => {
  return allStatus[status].label;
};

export const resolveStatusColor = (status: IDonation['status']): string => {
  return allStatus[status].color;
};

export const resolveSrcQRCode = (status: IDonation['status'], qrCodeBase64: string): string => {
  const isAvailableStatus = status === 'approved' || status === 'cancelled' || status === 'in_process';
  return isAvailableStatus ? srcQRCode[status] : qrCodeBase64;
};
