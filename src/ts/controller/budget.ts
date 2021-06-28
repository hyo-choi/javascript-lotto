/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-alert */
import { getPurchaseBudget } from '../view/budget.js';
import {
  showElement,
  enableInput,
  disableInput,
  hideElement,
} from '../view/display.js';

const checkBudget = (input: string): boolean => {
  if (input === '') {
    alert('구매할 금액을 입력해주세요.');
    return false;
  } if (Number.isNaN(Number(input))) {
    alert('유효한 정수값을 입력해주세요.');
    return false;
  } if (Number(input) < 1000 || Number(input) % 1 !== 0) {
    alert('1000 이상의 정수를 입력해주세요.');
    return false;
  }
  return true;
};

const handlePurchaseBudgetInput = (lotto: any) => {
  if (!checkBudget(getPurchaseBudget())) {
    hideElement('#purchase-count-form');
    disableInput('#purchase-count-input__manual');
    return;
  }
  lotto.budget = Number(getPurchaseBudget());
  showElement('#purchase-count-form');
  enableInput('#purchase-count-input__manual');
  // TODO: set max, min property in count inputs
};

export default handlePurchaseBudgetInput;
