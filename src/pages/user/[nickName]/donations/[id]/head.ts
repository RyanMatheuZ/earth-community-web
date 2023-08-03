import { IHead } from '@ts/interfaces';

export const head = (donationId: number): IHead => {
  return {
    title: `Doação ${donationId} | Earth Community`,
    description: `Aqui você pode ter mais detalhes sobre a doação ${donationId}`
  };
};
