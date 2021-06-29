/* eslint-disable import/no-unresolved */
import setModal from './modal.js';
import { handlePurchaseBudgetInput, handleManualCountRenewal, handlePurchaseCountInput } from '../controller/handleInput.js';
import {
  BUDGET_BUTTON,
  COUNT_BUTTON,
  COUNT_MANUAL_INPUT,
  MANUAL_BUTTON,
} from '../constant/constants.js';
import handleManualPurchase from '../controller/handlePurchase.js';

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

const setEventListeners = (lotto: any) => {
  setInputEvents(lotto);
  setPurchaseEvents(lotto);
  setModal();
};

export default setEventListeners;
