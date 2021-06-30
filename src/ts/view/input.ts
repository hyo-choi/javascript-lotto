const setInputValue = (selector: string, value: string | number) => {
  const target: HTMLInputElement = document.querySelector(selector)!;
  target.value = String(value);
};

const getInputValue = (selector: string): string => {
  const target: HTMLInputElement= document.querySelector(selector)!;
  return target.value;
};

const setInputMinMax = (selector: string, min: number, max: number) => {
  const target: HTMLInputElement = document.querySelector(selector)!;
  target.min = String(min);
  target.max = String(max);
};

const getInputMax = (selector: string): number => {
  const target: HTMLInputElement = document.querySelector(selector)!;
  return Number(target.max);
};

export {
  setInputValue,
  getInputValue,
  setInputMinMax,
  getInputMax,
};
