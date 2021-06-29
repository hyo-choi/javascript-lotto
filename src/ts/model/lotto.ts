/* eslint-disable import/no-unresolved */
import { COUNT_AUTO_INPUT, COUNT_MANUAL_INPUT } from '../constant/constants.js';
import { setInputValue, setInputMinMax } from '../view/input.js';

class Lotto {
  budget: number;

  constructor() {
    this.budget = 0;
  }

  handleBudget(budget: number) {
    const max = Math.floor(budget / 1000);

    this.budget = budget;
    setInputMinMax(COUNT_MANUAL_INPUT, 0, max);
    setInputMinMax(COUNT_AUTO_INPUT, 0, max);
    setInputValue(COUNT_MANUAL_INPUT, 0);
    setInputValue(COUNT_AUTO_INPUT, max);
  }
}

export default Lotto;
