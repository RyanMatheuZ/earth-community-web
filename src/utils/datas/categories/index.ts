import { categories, type CategoriesOptions } from './utils';

export const resolveCategoryIcon = (category: CategoriesOptions) => {
  const categoryIndex = categories.findIndex(({ label }) => label === category);
  return categories[categoryIndex].icon;
};
