const showElement = (selector: string) => {
  document.querySelector(selector)?.classList.remove('hidden');
};

const hideElement = (selector: string) => {
  document.querySelector(selector)?.classList.add('hidden');
};

const enableInput = (selector: string) => {
  (document.querySelector(selector) as HTMLInputElement)!.disabled = false;
};

const disableInput = (selector: string) => {
  (document.querySelector(selector) as HTMLInputElement)!.disabled = true;
};

export {
  showElement,
  hideElement,
  enableInput,
  disableInput,
};
