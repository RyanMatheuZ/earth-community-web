import { capitalizeWord } from '@utils/transforms/capitalizeWord';

describe('Transforms utils function', () => {
  it('should capitalize the first letter of a word', () => {
    const result = capitalizeWord('hello');
    expect(result).toBe('Hello');
  });

  it('should convert the rest of the word to lowercase', () => {
    const result = capitalizeWord('WORLD');
    expect(result).toBe('World');
  });

  it('should return an empty string if the input word is empty', () => {
    const result = capitalizeWord('');
    expect(result).toBe('');
  });

  it('should handle words with only one letter', () => {
    const result = capitalizeWord('a');
    expect(result).toBe('A');
  });

  it('should handle words with special characters', () => {
    const result = capitalizeWord('$hello');
    expect(result).toBe('$hello');
  });

  it('should handle words with numbers', () => {
    const result = capitalizeWord('word123');
    expect(result).toBe('Word123');
  });

  it('should return a string', () => {
    const result = capitalizeWord('Hi');
    expect(typeof result).toBe('string');
  });
});
