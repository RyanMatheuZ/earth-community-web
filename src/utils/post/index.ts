import {
  differenceInSeconds,
  differenceInMinutes,
  differenceInHours,
  differenceInDays
} from 'date-fns';

export const resolvePostCreatedAt = (createdAt: Date): string => {
  const currentDate = new Date();
  const createdAtDate = new Date(createdAt);

  const secondsNumber = differenceInSeconds(currentDate, createdAtDate);
  const minutesNumber = differenceInMinutes(currentDate, createdAtDate);
  const hoursNumber = differenceInHours(currentDate, createdAtDate);
  const daysNumber = differenceInDays(currentDate, createdAtDate);

  if (secondsNumber <= 60) return `${secondsNumber} seg`;
  else if (minutesNumber <= 60) return `${minutesNumber} min`;
  else if (hoursNumber <= 24) return `${hoursNumber} h`;
  else return `${daysNumber} d`;
};

export const resolveUserLikePost = (userId: string, likeUserIds: string[]): boolean => {
  return likeUserIds.includes(userId);
};