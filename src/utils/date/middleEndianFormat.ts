import { format } from 'date-fns';

export const middleEndianFormat = (date: Date): string => {
  return format(new Date(date), 'dd/MM/yyyy');
};
