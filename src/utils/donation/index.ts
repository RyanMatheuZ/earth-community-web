import type { IDonation } from '@ts/interfaces';

import { allStatus } from './utils';

export const resolveLabelStatus = (status: IDonation['status']) => {
  return allStatus[status].label;
};

export const resolveStatusColor = (status: IDonation['status']) => {
  return allStatus[status].color;
};
