/* eslint-disable import/no-unresolved */
import { MODAL } from '../constant/constants.js';

const openModal = () => {
  const $modal = document.querySelector(MODAL)!;
  $modal.classList.add('open');
};

const closeModal = () => {
  const $modal = document.querySelector(MODAL)!;
  $modal.classList.remove('open');
};

const showElement = (selector: string) => {
  document.querySelector(selector)?.classList.remove('hidden');
};

const hideElement = (selector: string) => {
  document.querySelector(selector)?.classList.add('hidden');
};

const enableInput = (selector: string) => {
  const target: HTMLInputElement = document.querySelector(selector)!;
  target.disabled = false;
};

const disableInput = (selector: string) => {
  const target: HTMLInputElement = document.querySelector(selector)!;
  target.disabled = true;
};

const uncheckButton = (selector: string) => {
  const target: HTMLInputElement = document.querySelector(selector)!;
  target.checked = false;
};

export {
  openModal,
  closeModal,
  showElement,
  hideElement,
  enableInput,
  disableInput,
  uncheckButton,
};
