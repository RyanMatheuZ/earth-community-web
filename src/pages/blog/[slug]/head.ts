import { IHead } from '@ts/interfaces';

export const head = (articleTitle: string, articleDescription: string): IHead => {
  return {
    title: `${articleTitle} | Earth Community`,
    description: `Leia sobre o artigo: ${articleTitle}. Introdução: ${articleDescription}`
  };
};
