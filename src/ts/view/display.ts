/* eslint-disable import/no-unresolved */

const showElement = (selector: string) => {
  document.querySelector(selector)?.classList.remove('hidden');
};

const hideElement = (selector: string) => {
  document.querySelector(selector)?.classList.add('hidden');
};

const enableInput = (selector: string) => {
  const target: HTMLInputElement | null = document.querySelector(selector);
  if (!target) {
    return;
  }
  target.disabled = false;
};

const disableInput = (selector: string) => {
  const target: HTMLInputElement | null = document.querySelector(selector);
  if (!target) {
    return;
  }
  target.disabled = true;
};

const uncheckButton = (selector: string) => {
  const target: HTMLInputElement | null = document.querySelector(selector);
  if (!target) {
    return;
  }
  target.checked = false;
};

export {
  showElement,
  hideElement,
  enableInput,
  disableInput,
  uncheckButton,
};
