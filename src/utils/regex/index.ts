export const rxEmail = new RegExp(
  '^[a-zA-Z0-9]+([%\\^&\\-\\=\\+\\,\\.]?[a-zA-Z0-9]+)@[a-zA-Z]+([\\.]?[a-zA-Z]+)*(\\.[a-zA-Z]{2,3})+$'
);

export const rxPassword =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W])(?!.*['"]).{8,}$/;

export const rxNumber = /[^\d]+/g;

export const phoneRegExp = /^\d{9}$/;
export const urlRegex =
  /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;

export const matchesRegex = (str: string, pattern: RegExp): boolean => {
  return pattern.test(str);
};

export const extractMatches = (str: string, pattern: RegExp): string[] => {
  const matches: string[] = [];
  let match;
  while ((match = pattern.exec(str)) !== null) {
    matches.push(match[0]);
  }
  return matches;
};

export const replaceAllOccurrences = (
  str: string,
  pattern: RegExp,
  replacement: string
): string => {
  return str.replace(new RegExp(pattern, 'g'), replacement);
};

export const isValidURL = (url: string): boolean => {
  const pattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  return pattern.test(url);
};

export const regexName = /^[a-zA-Z\s]+$/;

export const regexDateDDMMYYYY =
  /^(0?[1-9]|[1-2][0-9]|3[0-1])-(0?[1-9]|1[0-2])-\d{4}$/;
