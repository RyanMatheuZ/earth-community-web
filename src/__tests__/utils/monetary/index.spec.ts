import { formatCurrencyBRL } from '@utils/monetary';

const formatCurrencyBRLNonBreakingSpaces = (value: number, showSymbol?: boolean): string => {
  return formatCurrencyBRL(value, showSymbol).replace(/\s/g, ' ');
  // It's the space character in your expected string. The Intl library uses non-breaking spaces, ASCII 160
  // https://stackoverflow.com/questions/72708757/jest-function-to-format-currency-values
};

describe('Monetary utils function', () => {
  it('should format currency with symbol by default', () => {
    const result = formatCurrencyBRLNonBreakingSpaces(1000);
    expect(result).toBe('R$ 1.000,00');
  });

  it('should format currency with symbol when showSymbol is true', () => {
    const result = formatCurrencyBRLNonBreakingSpaces(2500, true);
    expect(result).toBe('R$ 2.500,00');
  });

  it('should format currency without symbol when showSymbol is false', () => {
    const result = formatCurrencyBRL(1500, false);
    expect(result).toBe('1.500,00');
  });

  it('should format currency with decimal values', () => {
    const result = formatCurrencyBRLNonBreakingSpaces(999.99);
    expect(result).toBe('R$ 999,99');
  });

  it('should format currency with negative values', () => {
    const result = formatCurrencyBRLNonBreakingSpaces(-500);
    expect(result).toBe('-R$ 500,00');
  });

  it('should format currency with large values', () => {
    const result = formatCurrencyBRLNonBreakingSpaces(1000000);
    expect(result).toBe('R$ 1.000.000,00');
  });

  it('should return a string', () => {
    const result = formatCurrencyBRL(1000);
    expect(typeof result).toBe('string');
  });

  it('should return an empty string when value is NaN', () => {
    const firstCase = formatCurrencyBRL(NaN);
    const secondCase = formatCurrencyBRL(NaN, false);

    expect(firstCase).toBe('');
    expect(secondCase).toBe('');
  });
});
