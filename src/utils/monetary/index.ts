export const formatCurrencyBRL = (value: number, showSymbol = true): string => {
  const formattedValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
  return showSymbol ? formattedValue : formattedValue.replace('R$', '');
};
