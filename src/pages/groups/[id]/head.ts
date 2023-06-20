import { IHead } from '@ts/interfaces';

export const head = (groupName: string, groupDescription: string): IHead => {
  return {
    title: `${groupName} | Earth Community`,
    description: `Conheça o grupo: ${groupName}. ${groupDescription}`
  };
};
