import { format } from 'date-fns';

export const middleEndianFormat = (date: Date, showHour?: boolean): string => {
  return format(new Date(date), showHour ? 'dd/MM/yyyy | HH:mm' : 'dd/MM/yyyy');
};
