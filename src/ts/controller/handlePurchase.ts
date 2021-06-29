/* eslint-disable no-alert */
/* eslint-disable import/no-unresolved */
import { MANUAL_INPUT, MANUAL_P } from '../constant/constants.js';

const checkValidNumber = ($line: HTMLParagraphElement): boolean => {
  const $inputs = Array.from($line.querySelectorAll(MANUAL_INPUT));
  const set = new Set();

  for (let i = 0; i < 6; i += 1) {
    const value = Number(($inputs[i] as HTMLInputElement).value);
    if (Number.isNaN(value) || value < 1 || value > 45) {
      alert(`
      ${$line.dataset.index}번째 로또의 ${i + 1}번째 입력이 잘못되었습니다.
      1 이상 45 이하의 정수를 각 로또마다 중복 없이 입력해주세요.
      `);
      return false;
    }
    set.add(value);
  }
  if (set.size !== 6) {
    alert(`
    ${$line.dataset.index}번째 로또에 중복된 값이 입력되었습니다.
    1 이상 45 이하의 정수를 각 로또마다 중복 없이 입력해주세요.
    `);
    return false;
  }
  return true;
};

const checkValidNumbers = (): boolean => {
  const $lines = document.querySelectorAll(MANUAL_P);
  let isValid = true;

  $lines.forEach(($line: HTMLInputElement) => {
    if (isValid) {
      isValid = checkValidNumber($line);
    }
  });
  return isValid;
};

const makeLottoNumbers = (): Array<number>[] => {
  const $lines = document.querySelectorAll(MANUAL_P);
  const tickets: Array<number>[] = [];

  $lines.forEach(($line: HTMLParagraphElement) => {
    const $inputs = Array.from($line.querySelectorAll(MANUAL_INPUT));
    const ticket: number[] = [];

    $inputs.forEach(($input: HTMLInputElement) => ticket.push(Number($input.value)));
    tickets.push(ticket);
  });
  return tickets;
};

const handleManualPurchase = (lotto: any) => {
  if (!checkValidNumbers()) {
    return;
  }
  lotto.handleManualPurchase(makeLottoNumbers());
  lotto.handleAutoPurchase();
  lotto.handlePurchaseDone();
};

export default handleManualPurchase;
