export const shortenText = (text: string) => {
  return text.length <= 85 ? text : text.substring(0, 85).concat("...");
};
