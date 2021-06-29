/* eslint-disable import/no-unresolved */
import setModal from './modal.js';
import { handlePurchaseBudgetInput, handleManualCountRenewal } from '../controller/handleInput.js';
import { BUDGET_BUTTON, COUNT_MANUAL_INPUT } from '../constant/constants.js';

const setEventListeners = (lotto: any) => {
  const $purchaseBudgetButton = document.querySelector(BUDGET_BUTTON)!;
  const $purchaseCountManual = document.querySelector(COUNT_MANUAL_INPUT)!;

  setModal();
  $purchaseBudgetButton.addEventListener('click', () => handlePurchaseBudgetInput(lotto));
  $purchaseCountManual.addEventListener('change', handleManualCountRenewal);
};

export default setEventListeners;
