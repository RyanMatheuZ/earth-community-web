import { middleEndianFormat } from '@utils/date/middleEndianFormat';

describe('Date utils function', () => {
  it('should format the date in middle-endian format without hour', () => {
    const firstCase = new Date(2023, 0, 1);
    const secondCase = new Date(2023, 11, 31);
    const thirdCase = new Date(2023, 2, 15);

    const firstResult = middleEndianFormat(firstCase);
    const secondResult = middleEndianFormat(secondCase);
    const thirdResult = middleEndianFormat(thirdCase);

    expect(firstResult).toBe('01/01/2023');
    expect(secondResult).toBe('31/12/2023');
    expect(thirdResult).toBe('15/03/2023');
  });

  it('should format the date in middle-endian format with hour', () => {
    const firstCase = new Date(2023, 6, 12, 9, 0);
    const secondCase = new Date(2023, 8, 5, 17, 30);
    const thirdCase = new Date(2023, 4, 20, 12, 15);

    const firstResult = middleEndianFormat(firstCase, true);
    const secondResult = middleEndianFormat(secondCase, true);
    const thirdResult = middleEndianFormat(thirdCase, true);

    expect(firstResult).toBe('12/07/2023 | 09:00');
    expect(secondResult).toBe('05/09/2023 | 17:30');
    expect(thirdResult).toBe('20/05/2023 | 12:15');
  });
});
