/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-alert */
import { getInputValue, getInputMax, setInputValue } from '../view/input.js';
import { disableInput, hideElement, } from '../view/display.js';
import { BUDGET_INPUT, COUNT_FORM, COUNT_MANUAL_INPUT, COUNT_AUTO_INPUT, } from '../constant/constants.js';
const checkBudget = (input) => {
    if (input === '') {
        alert('구매할 금액을 입력해주세요.');
        return false;
    }
    if (Number.isNaN(Number(input))) {
        alert('유효한 정수값을 입력해주세요.');
        return false;
    }
    if (Number(input) < 1000 || Number(input) % 1 !== 0) {
        alert('1000 이상의 정수를 입력해주세요.');
        return false;
    }
    return true;
};
const handlePurchaseBudgetInput = (lotto) => {
    if (!checkBudget(getInputValue(BUDGET_INPUT))) {
        hideElement(COUNT_FORM);
        disableInput(COUNT_MANUAL_INPUT);
        return;
    }
    lotto.handleBudget(Number(getInputValue(BUDGET_INPUT)));
};
const checkCount = (input, max) => {
    if (Number.isNaN(Number(input))) {
        alert('유효한 정수값을 입력해주세요.');
        return false;
    }
    if (Number(input) < 0 || Number(input) > max || Number(input) % 1 !== 0) {
        alert(`0 이상 ${max} 이하의 정수를 입력해주세요.`);
        return false;
    }
    return true;
};
const handleManualCountRenewal = () => {
    const manualCount = getInputValue(COUNT_MANUAL_INPUT);
    const max = getInputMax(COUNT_MANUAL_INPUT);
    if (manualCount === '') {
        return;
    }
    if (!checkCount(manualCount, max)) {
        setInputValue(COUNT_MANUAL_INPUT, 0);
        setInputValue(COUNT_AUTO_INPUT, max);
        return;
    }
    setInputValue(COUNT_AUTO_INPUT, max - Number(manualCount));
};
const handlePurchaseCountInput = (lotto) => {
    lotto.handleCount(Number(getInputValue(COUNT_MANUAL_INPUT)), Number(getInputValue(COUNT_AUTO_INPUT)));
};
export { handlePurchaseBudgetInput, handleManualCountRenewal, handlePurchaseCountInput };
