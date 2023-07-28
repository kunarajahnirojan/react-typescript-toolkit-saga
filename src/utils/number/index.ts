export const getRandomNumberInRange = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const formatNumberWithCommas = (number: number): string => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const numberToOrdinal = (number: number): string => {
  const suffixes = ['th', 'st', 'nd', 'rd'];
  const v = number % 100;
  return number + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
};

export const isNumber = (value: any): boolean => {
  return typeof value === 'number' && !isNaN(value);
};

export const isNumberInRange = (
  number: number,
  min: number,
  max: number
): boolean => {
  return number >= min && number <= max;
};
