export const isCommentOwner = (userId: string, commentAuthorId: string) => {
  return userId === commentAuthorId;
};
