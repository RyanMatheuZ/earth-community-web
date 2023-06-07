export const randomAlphanumericGenerator = (length: number): string => {
  const alphanumericChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    result += alphanumericChars.charAt(Math.floor(Math.random() * alphanumericChars.length));
  }

  return result;
};

export const nickNameGenerator = (firstName: string, surname: string, alphanumericLength: number): string => {
  const alphanumeric = randomAlphanumericGenerator(alphanumericLength);

  return `${firstName.toLowerCase()}-${surname.toLowerCase()}-${alphanumeric}`;
};
