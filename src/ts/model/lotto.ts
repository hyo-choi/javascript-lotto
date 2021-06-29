/* eslint-disable import/no-unresolved */
import {
  COUNT_AUTO_INPUT,
  COUNT_FORM,
  COUNT_MANUAL_INPUT,
  LOTTO_NUMBERS,
  MANUAL_FORM,
  WINNING_FORM,
} from '../constant/constants.js';
import { showElement, enableInput, hideElement } from '../view/display.js';
import { setInputValue, setInputMinMax } from '../view/input.js';
import setManualPurchaseDiv from '../view/purchase.js';

class Lotto {
  budget: number;

  manualCount: number;

  autoCount: number;

  constructor() {
    this.budget = 0;
    this.manualCount = 0;
    this.autoCount = 0;
  }

  handleBudget(budget: number) {
    const max = Math.floor(budget / 1000);

    this.budget = budget;
    setInputMinMax(COUNT_MANUAL_INPUT, 0, max);
    setInputMinMax(COUNT_AUTO_INPUT, 0, max);
    setInputValue(COUNT_MANUAL_INPUT, 0);
    setInputValue(COUNT_AUTO_INPUT, max);
    showElement(COUNT_FORM);
    enableInput(COUNT_MANUAL_INPUT);

    hideElement(MANUAL_FORM);
    hideElement(LOTTO_NUMBERS);
    hideElement(WINNING_FORM);
  }

  handleCount(manual: number, auto: number) {
    hideElement(LOTTO_NUMBERS);
    hideElement(WINNING_FORM);
    this.manualCount = manual;
    this.autoCount = auto;
    if (!manual && auto) {
      this.handleAutoPurchase();
    } else if (manual) {
      setManualPurchaseDiv(manual);
    }
  }

  handleManualPurchase() {
    // TODO: 수동 구매 처리
  }

  handleAutoPurchase() {
    if (!this.autoCount) {
      return;
    }
    // TODO: 자동 구매 처리
    this.handlePurchaseDone();
  }

  handlePurchaseDone() {
    hideElement(COUNT_FORM);
    hideElement(MANUAL_FORM);
    showElement(LOTTO_NUMBERS);
    showElement(WINNING_FORM);
    // TODO: show result section, form
  }
}

export default Lotto;
