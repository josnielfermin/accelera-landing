export const shortenAddress = (str: string, maxLength: number) => {
  if (str.length <= maxLength) {
    return str;
  }

  const startLength = Math.ceil((maxLength - 3) / 2);
  const endLength = Math.floor((maxLength - 3) / 2);

  const start = str.substring(0, startLength);
  const end = str.substring(str.length - endLength);

  return `${start}...${end}`;
};
