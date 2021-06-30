/* eslint-disable import/no-unresolved */
import {
  handlePurchaseBudgetInput,
  handleManualCountRenewal,
  handlePurchaseCountInput,
} from '../controller/input.js';
import {
  BUDGET_BUTTON,
  COUNT_BUTTON,
  COUNT_MANUAL_INPUT,
  LOTTO_NUMBER_BUTTON,
  MANUAL_BUTTON,
  MODAL_CLOSE,
  RESULT_BUTTON,
  RESULT_RESET_BUTTON,
} from '../constant/constants.js';
import handleManualPurchase from '../controller/purchase.js';
import { toggleTicketNumbers } from './print.js';
import { handleReset, handleResultInput } from '../controller/result.js';
import { closeModal } from './display.js';
import Lotto from '../model/lotto.js';

const setInputEvents = (lotto: Lotto) => {
  const $purchaseBudgetButton = document.querySelector(BUDGET_BUTTON)!;
  const $purchaseCountManual = document.querySelector(COUNT_MANUAL_INPUT)!;
  const $purchaseCountButton = document.querySelector(COUNT_BUTTON)!;

  $purchaseBudgetButton.addEventListener('click', () => handlePurchaseBudgetInput(lotto));
  $purchaseCountManual.addEventListener('change', handleManualCountRenewal);
  $purchaseCountButton.addEventListener('click', () => handlePurchaseCountInput(lotto));
};

const setPurchaseEvents = (lotto: Lotto) => {
  const $manualPurchaseButton = document.querySelector(MANUAL_BUTTON)!;

  $manualPurchaseButton.addEventListener('click', () => handleManualPurchase(lotto));
};

const setPrintEvents = () => {
  const $lottoNumbersToggleButton = document.querySelector(LOTTO_NUMBER_BUTTON)!;

  $lottoNumbersToggleButton.addEventListener('click', toggleTicketNumbers);
};

const setResultEvents = (lotto: Lotto) => {
  const $showResultButton = document.querySelector(RESULT_BUTTON)!;
  const $modalCloseButton = document.querySelector(MODAL_CLOSE)!;
  const $resetResultButton = document.querySelector(RESULT_RESET_BUTTON)!;

  $showResultButton.addEventListener('click', () => handleResultInput(lotto));
  $resetResultButton.addEventListener('click', () => handleReset(lotto));
  $modalCloseButton.addEventListener('click', closeModal);
};

const setEventListeners = (lotto: Lotto) => {
  setInputEvents(lotto);
  setPurchaseEvents(lotto);
  setPrintEvents();
  setResultEvents(lotto);
};

export default setEventListeners;
