/* eslint-disable import/no-unresolved */
import setModal from './modal.js';
import handlePurchaseBudgetInput from '../controller/budget.js';

const setEventListeners = (lotto: any) => {
  const $purchaseBudgetButton = document.querySelector('#purchase-budget-input__button')!;

  setModal();
  $purchaseBudgetButton.addEventListener('click', () => handlePurchaseBudgetInput(lotto));
};

export default setEventListeners;
