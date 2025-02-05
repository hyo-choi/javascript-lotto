/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
import {
  MANUAL_DIV,
  MANUAL_FORM,
} from '../constant/constants.js';
import { showElement } from './display.js';

const resetManualPurchaseDiv = (selector: string) => {
  const target: HTMLDivElement = document.querySelector(selector)!;
  target.textContent = '';
};

const makeNumberInput = (idx: number): string => {
  const array: string[] = [];
  for (let i = 0; i < 6; i += 1) {
    array.push(`
    <input type="number"
    class="manual-number mx-1 text-center"
    min="1" max="45"/>
    `);
  }
  return `
    <p data-index="${idx}"
    class="manual-numbers d-flex justify-center">
    ${array.join('')}</p>
  `;
};

const addManualInputs = (count: number) => {
  const $manualPurchaseDiv = document.querySelector(MANUAL_DIV)!;
  while (count) {
    $manualPurchaseDiv.insertAdjacentHTML('afterbegin', makeNumberInput(count));
    count -= 1;
  }
};

const setManualPurchaseDiv = (count: number) => {
  resetManualPurchaseDiv(MANUAL_DIV);
  addManualInputs(count);
  showElement(MANUAL_FORM);
};

export default setManualPurchaseDiv;
