export const unformat = (value: string): number => {
  value = value.replace(/\D/g, '');
  return +value;
};
