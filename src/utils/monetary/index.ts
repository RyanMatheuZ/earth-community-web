export const formatCurrencyBRL = (value: number, showSymbol = true): string => {
  if (isNaN(value)) return '';

  const formattedValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);

  return showSymbol ? formattedValue : formattedValue.replace('R$', '').trim();
};
