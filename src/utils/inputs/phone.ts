export const formatPhoneNumber = (phoneNumber: string): string => {
  return phoneNumber
    .replace(/\D/g, '')
    .slice(0, 11)
    .replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
};
