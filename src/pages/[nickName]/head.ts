import { IHead } from '@ts/interfaces';

export const head = (userName: string): IHead => {
  return {
    title: `${userName} | Earth Community`,
    description: `Conheça mais sobre ${userName}, veja sua descrição, conquistas, grupos e muito mais. Junte-se à comunidade e expanda sua presença social!`
  };
};
