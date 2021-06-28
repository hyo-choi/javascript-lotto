/* eslint-disable import/no-unresolved */
const $purchaseBudgetInput: HTMLInputElement = document.querySelector('#purchase-budget-input__input')!;

const getPurchaseBudget = (): string => $purchaseBudgetInput.value!;

const setPurchaseBudget = (input: string) => {
  $purchaseBudgetInput.value = input;
};

export { getPurchaseBudget, setPurchaseBudget };
