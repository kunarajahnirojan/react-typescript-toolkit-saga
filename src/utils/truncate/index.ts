export const truncateString = (value: string, length: any) =>
  value.length > length ? `${value.substring(0, length)}…` : value;

export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const isStringEmpty = (str: string): boolean => {
  return str.trim() === '';
};

export const debounce = (
  func: (...args: any[]) => void,
  delay: number
): (() => void) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

export const isNullOrUndefined = (value: any): boolean => {
  return value === undefined || value === null;
};

export const truncateText = (text: string, maxLength: number): string => {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
};

export const camelCaseToSnakeCase = (str: string): string => {
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
};

export const snakeCaseToCamelCase = (str: string): string => {
  return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
};

export const toPascalCase = (str: string): string => {
  return str.replace(
    /(\w)(\w*)/g,
    (_, firstChar, rest) => firstChar.toUpperCase() + rest.toLowerCase()
  );
};

export const isPascalCase = (str: string): boolean => {
  return /^[A-Z][a-zA-Z0-9]*$/.test(str);
};

export const pascalCaseToWords = (str: string): string => {
  return str.replace(/([a-z])([A-Z])/g, '$1 $2');
};
