import {
  addHours,
  differenceInSeconds,
  differenceInMinutes,
  differenceInHours,
  differenceInDays
} from 'date-fns';

export const resolveCreatedAt = (createdAt: Date, currentDate?: Date): string => {
  const getCurrentDate = currentDate || new Date();
  const createdAtDate = addHours(new Date(createdAt), 3);

  const secondsNumber = differenceInSeconds(getCurrentDate, createdAtDate);
  const minutesNumber = differenceInMinutes(getCurrentDate, createdAtDate);
  const hoursNumber = differenceInHours(getCurrentDate, createdAtDate);
  const daysNumber = differenceInDays(getCurrentDate, createdAtDate);

  if (secondsNumber <= 60) return `${secondsNumber} seg`;
  else if (minutesNumber <= 60) return `${minutesNumber} min`;
  else if (hoursNumber <= 24) return `${hoursNumber} h`;
  else return `${daysNumber} d`;
};

export const resolveUserLikePost = (userId: string, likeUserIds: string[]): boolean => {
  return likeUserIds.includes(userId);
};
