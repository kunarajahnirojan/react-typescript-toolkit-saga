export const hasKey = (obj: object, key: string): boolean => {
  return Object.prototype.hasOwnProperty.call(obj, key);
};

export const objectToQueryString = (params: {
  [key: string]: string | number;
}): string => {
  return Object.keys(params)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    )
    .join('&');
};

export const deepClone = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
};

export const isObjectEmpty = (obj: { [key: string]: any }): boolean => {
  return Object.keys(obj).length === 0;
};
