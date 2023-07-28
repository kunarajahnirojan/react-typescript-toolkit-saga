export const getCurrentURLParams = (): { [key: string]: string } => {
  const params = new URLSearchParams(window.location.search);
  const paramsObject: { [key: string]: string } = {};
  params.forEach((value, key) => {
    paramsObject[key] = value;
  });
  return paramsObject;
};

export const isPalindrome = (str: string): boolean => {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversed = cleanStr.split('').reverse().join('');
  return cleanStr === reversed;
};

export const getURLParameters = (url: string): { [key: string]: string } => {
  const pattern = /(\w+)=([^&]+)/g;
  const params: { [key: string]: string } = {};
  let match;
  while ((match = pattern.exec(url)) !== null) {
    params[match[1]] = match[2];
  }
  return params;
};

export const isValidHexColor = (color: string): boolean => {
  const pattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  return pattern.test(color);
};

export const generateRandomColor = (): string => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;

  //  usage =  const randomColor = generateRandomColor();
};
