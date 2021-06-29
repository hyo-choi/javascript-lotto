/* eslint-disable import/no-unresolved */
import {
  handlePurchaseBudgetInput,
  handleManualCountRenewal,
  handlePurchaseCountInput,
} from '../controller/handleInput.js';
import {
  BUDGET_BUTTON,
  COUNT_BUTTON,
  COUNT_MANUAL_INPUT,
  LOTTO_NUMBER_BUTTON,
  MANUAL_BUTTON,
} from '../constant/constants.js';
import handleManualPurchase from '../controller/handlePurchase.js';
import { toggleTicketNumbers } from './print.js';

const setInputEvents = (lotto: any) => {
  const $purchaseBudgetButton = document.querySelector(BUDGET_BUTTON)!;
  const $purchaseCountManual = document.querySelector(COUNT_MANUAL_INPUT)!;
  const $purchaseCountButton = document.querySelector(COUNT_BUTTON)!;

  $purchaseBudgetButton.addEventListener('click', () => handlePurchaseBudgetInput(lotto));
  $purchaseCountManual.addEventListener('change', handleManualCountRenewal);
  $purchaseCountButton.addEventListener('click', () => handlePurchaseCountInput(lotto));
};

const setPurchaseEvents = (lotto: any) => {
  const $manualPurchaseButton = document.querySelector(MANUAL_BUTTON)!;

  $manualPurchaseButton.addEventListener('click', () => handleManualPurchase(lotto));
};

const setPrintEvents = () => {
  const $lottoNumbersToggleButton = document.querySelector(LOTTO_NUMBER_BUTTON)!;
  const $showResultButton = document.querySelector('.open-result-modal-button')!;
  const $modalClose = document.querySelector('.modal-close')!;
  const $modal = document.querySelector('.modal')!;

  $lottoNumbersToggleButton.addEventListener('click', toggleTicketNumbers);
  $showResultButton.addEventListener('click', () => $modal.classList.add('open'));
  $modalClose.addEventListener('click', () => $modal.classList.remove('open'));
};

const setEventListeners = (lotto: any) => {
  setInputEvents(lotto);
  setPurchaseEvents(lotto);
  setPrintEvents();
};

export default setEventListeners;
