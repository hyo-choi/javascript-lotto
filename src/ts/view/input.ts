const setInputValue = (selector: string, value: any) => {
  const target: HTMLInputElement | null = document.querySelector(selector);
  if (!target) {
    return;
  }
  target.value = String(value);
};

const getInputValue = (selector: string): string => {
  const target: HTMLInputElement | null = document.querySelector(selector);
  if (!target) {
    return '';
  }
  return target.value;
};

const setInputMinMax = (selector: string, min: number, max: number) => {
  const target: HTMLInputElement | null = document.querySelector(selector);
  if (!target) {
    return;
  }
  target.min = String(min);
  target.max = String(max);
};

const getInputMax = (selector: string): number => {
  const target: HTMLInputElement | null = document.querySelector(selector);
  if (!target) {
    return -1;
  }
  return Number(target.max);
};

export {
  setInputValue,
  getInputValue,
  setInputMinMax,
  getInputMax,
};
