/* eslint-disable no-alert */
/* eslint-disable import/no-unresolved */
import { BONUS_INPUT, MODAL, WINNING_INPUT } from '../constant/constants.js';
import Lotto from '../model/lotto.js';

const checkResult = (...$inputs: readonly HTMLInputElement[]): boolean => {
  const set = new Set();

  for (let i = 0; i < $inputs.length; i += 1) {
    const value = Number($inputs[i].value);
    if (Number.isNaN(value) || value < 1 || value > 45) {
      alert(`
      당첨 번호의 ${i + 1}번째 입력이 잘못되었습니다.
      1 이상 45 이하의 정수를 중복 없이 입력해주세요.
      `);
      return false;
    }
    set.add(value);
  }
  if (set.size !== 7) {
    alert(`
    당첨 번호에 중복된 값이 입력되었습니다.
    1 이상 45 이하의 정수를 중복 없이 입력해주세요.
    `);
    return false;
  }
  return true;
};

const makeNumberArray = ($inputs: readonly HTMLInputElement[]): number[] => {
  const array: number[] = [];

  $inputs.forEach(($input) => array.push(Number($input.value)));
  return array;
};

const handleResultInput = (lotto: Lotto) => {
  const $modal = document.querySelector(MODAL)!;
  const $winningInputs: readonly HTMLInputElement[] = Array.from(document.querySelectorAll(WINNING_INPUT)!);
  const $bonusInput: HTMLInputElement = document.querySelector(BONUS_INPUT)!;

  if (!checkResult(...$winningInputs, $bonusInput)) {
    return;
  }
  lotto.handleResultInput(makeNumberArray($winningInputs), Number($bonusInput.value));
  $modal.classList.add('open');
};

const handleReset = (lotto: Lotto) => {
  lotto.reset();
};

export { handleResultInput, handleReset };
