import { resolveCreatedAt, resolveUserLikePost } from '@utils/post';

describe('Posts utils function', () => {
  describe('To resolveCreatedAt', () => {
    const currentDate = new Date('2023-07-12T19:00:00');

    it('should return the correct string for seconds', () => {
      const createdAt = new Date('2023-07-12T15:59:00');
      const result = resolveCreatedAt(createdAt, currentDate);

      expect(result).toBe('60 seg');
    });

    it('should return the correct string for minutes', () => {
      const createdAt = new Date('2023-07-12T15:00:00');
      const result = resolveCreatedAt(createdAt, currentDate);

      expect(result).toBe('60 min');
    });

    it('should return the correct string for hours', () => {
      const createdAt = new Date('2023-07-12T11:59:55');
      const result = resolveCreatedAt(createdAt, currentDate);

      expect(result).toBe('4 h');
    });

    it('should return the correct string for days', () => {
      const createdAt = new Date('2023-07-10T12:00:00');
      const result = resolveCreatedAt(createdAt, currentDate);

      expect(result).toBe('2 d');
    });

    it('should return a string', () => {
      const createdAt = new Date('2023-07-10T12:00:00');
      const result = resolveCreatedAt(createdAt, currentDate);

      expect(typeof result).toBe('string');
    });
  });

  describe('To resolveUserLikePost', () => {
    it('should return true if the user has liked the post', () => {
      const userId = 'user123';
      const likeUserIds = ['user456', 'user123', 'user789'];

      const result = resolveUserLikePost(userId, likeUserIds);

      expect(result).toBe(true);
      expect(typeof result).toBe('boolean');
    });

    it('should return false if the user has not liked the post', () => {
      const userId = 'user123';
      const likeUserIds = ['user456', 'user789'];

      const result = resolveUserLikePost(userId, likeUserIds);

      expect(result).toBe(false);
      expect(typeof result).toBe('boolean');
    });
  });
});
