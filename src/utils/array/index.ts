export const isArrayEmpty = <T>(arr: T[]): boolean => {
  return arr.length === 0;
};

export const flattenArray = <T>(arr: T[][]): T[] => {
  return ([] as T[]).concat(...arr);
};

export const sumArrayElements = (arr: number[]): number => {
  return arr.reduce((sum, current) => sum + current, 0);
};

export const getUniqueValues = <T>(arr: T[]): T[] => {
  return Array.from(new Set(arr));
};

export const getArrayAverage = (arr: number[]): number => {
  if (arr.length === 0) return 0;
  const sum = arr.reduce((acc, val) => acc + val, 0);
  return sum / arr.length;
};

export const shuffleArray = <T>(arr: T[]): T[] => {
  const arrayCopy = [...arr];
  for (let i = arrayCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
  }
  return arrayCopy;
};

export const removeDuplicatesFromArray = <T>(arr: T[]): T[] => {
  return Array.from(new Set(arr));
};

export const arrayContainsValue = <T>(arr: T[], value: T): boolean => {
  return arr.includes(value);
};

export const getLastNElementsFromArray = <T>(arr: T[], n: number): T[] => {
  return arr.slice(Math.max(arr.length - n, 0));
};

export const getArrayIntersection = <T>(arr1: T[], arr2: T[]): T[] => {
  return arr1.filter((item) => arr2.includes(item));
};

export const containsSubstring = (str: string, substring: string): boolean => {
  return str.toLowerCase().includes(substring.toLowerCase());
};

export const objectToArray = <T extends object>(
  obj: T
): Array<[keyof T, T[keyof T]]> => {
  return Object.entries(obj) as Array<[keyof T, T[keyof T]]>;
};

export function map<T, U>(arr: T[], fn: (item: T) => U): U[] {
  return arr.map(fn);
}

export function filter<T>(arr: T[], fn: (item: T) => boolean): T[] {
  return arr.filter(fn);
}

export function find<T>(arr: T[], fn: (item: T) => boolean): T | undefined {
  return arr.find(fn);
}

export function forEach<T>(arr: T[], fn: (item: T) => void): void {
  arr.forEach(fn);
}

export function every<T>(arr: T[], fn: (item: T) => boolean): boolean {
  return arr.every(fn);
}

export function some<T>(arr: T[], fn: (item: T) => boolean): boolean {
  return arr.some(fn);
}

export function includes<T>(arr: T[], item: T): boolean {
  return arr.includes(item);
}

export function isEmpty<T>(arr: T[] | Record<string, T>): boolean {
  if (Array.isArray(arr)) {
    return arr.length === 0;
  }
  return Object.keys(arr).length === 0;
}

export function groupBy<T, K extends keyof T>(
  arr: T[],
  key: K
): Record<string, T[]> {
  return arr.reduce((acc, item) => {
    const groupKey = item[key];
    acc[String(groupKey)] = [...(acc[String(groupKey)] || []), item];
    return acc;
  }, {} as Record<string, T[]>);
}

export function uniq<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}

export function range(start: number, end: number, step = 1) {
  const arr = [];
  for (let i = start; i <= end; i += step) {
    arr.push(i);
  }
  return arr;
}

export function sortBy<T>(arr: T[], fn: (item: T) => any): T[] {
  return arr.slice().sort((a, b) => {
    const keyA = fn(a);
    const keyB = fn(b);
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  });
}

export function flatten<T>(arr: (T | T[])[]): T[] {
  return arr.reduce<T[]>(
    (acc, val) => acc.concat(val instanceof Array ? val : [val]),
    []
  );
}

export function omit<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> {
  const omittedObj = { ...obj };
  keys.forEach((key) => delete omittedObj[key]);
  return omittedObj;
}

export function pick<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> {
  const pickedObj = {} as Pick<T, K>;
  keys.forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      pickedObj[key] = obj[key];
    }
  });
  return pickedObj;
}
