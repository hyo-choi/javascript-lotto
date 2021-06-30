/* eslint-disable no-param-reassign */
/* eslint-disable import/no-unresolved */
import {
  BONUS_INPUT,
  RESULT_TABLE,
  RESULT_YIELD,
  WINNING_INPUT,
} from '../constant/constants.js';

const resetWinningInputs = () => {
  const $winningInputs: HTMLInputElement[] = Array.from(document.querySelectorAll(WINNING_INPUT)!);
  const $bonusInput: HTMLInputElement = document.querySelector(BONUS_INPUT)!;
  $winningInputs.forEach(($input) => {
    $input.value = '';
  });
  $bonusInput.value = '';
};

const setResult = (array: readonly number[], percent: string) => {
  const $resultTable: HTMLTableElement = document.querySelector(RESULT_TABLE)!;
  const $resultRows: HTMLTableRowElement[] = Array.from($resultTable.querySelectorAll('tbody tr')!);
  const $resultYield: HTMLParagraphElement = document.querySelector(RESULT_YIELD)!;

  $resultRows.forEach(($row, idx) => {
    $row.lastElementChild!.textContent = `${array[5 - idx]}개`;
  });
  $resultYield.textContent = `당신의 총 수익률은 ${percent}%입니다.`;
};

export { resetWinningInputs, setResult };
