const ELEMENT = {
  // purchase-amount-container
  PURCHASE_AMOUNT_CONTAINER: ".purchase-amount-container",
  PURCHASE_AMOUNT_INPUT: ".purchase-amount-input",
  PURCHASE_AMOUNT_SUBMIT_BUTTON: ".purchase-amount-submit-button",

  // purchase-option-container
  PURCHASE_OPTION_CONTAINER: ".purchase-option-container",
  PURCHASE_BALANCE_LABEL: ".purchase-balance-label",
  AUTO_NUMBER_PURCHASE_BUTTON: ".auto-number-purchase-button",
  MANUAL_NUMBER_PURCHASE_BUTTON: ".manual-number-purchase-button",
  PURCHASE_STATUS_LABEL: ".purchase-status-label",
  MANUAL_NUMBER: ".manual-number",
  PURCHASE_PAYMENT_BUTTON: ".purchase-payment-button",

  // receipt-container
  RECEIPT_CONTAINER: ".receipt-container",
  TICKET_IMAGE_NUMBER_AREA: ".ticket-image-number-area",
  TOGGLE_BUTTON: ".toggle-button",
  PURCHASE_AMOUNT_LABEL: ".purchase-amount-label",
  LOTTO_IMAGE_NUMBER: "#lotto-image-number",

  // win-number-container
  WINNING_NUMBER_CONTAINER: ".winning-number-container",
  WINNING_NUMBER: ".winning-number",
  BONUS_NUMBER: ".bonus-number",
  OPEN_RESULT_MODAL_BUTTON: ".open-result-modal-button",

  // modal-container
  MODAL: ".modal",
  WINNING_COUNT: ".winning-count",
  RESTART_BUTTON: "#restart-button",
  TOTAL_EARNING_RATE: "#total-earning-rate",
  MODAL_CLOSE: ".modal-close",

  HIDDEN: "hidden",
  FLEX_COL: "flex-col",
  OPEN: "open",
};

const ONE_TICKET_PRICE = 1000;

const STANDARD_NUMBER = {
  LOTTO_MAX_NUMBER: 45,
  TICKET_NUMBER_LENGTH: 6,
  ONE_TICKET_PRICE: ONE_TICKET_PRICE,
  MIN_PURCHASE_PRICE: ONE_TICKET_PRICE,
  MAX_PURCHASE_PRICE: 5000,
  MIN_LOTTO_NUMBER: 1,
  MAX_LOTTO_NUMBER: 45,
};

const RANK = {
  FIRST: "FIRST",
  SECOND: "SECOND",
  THIRD: "THIRD",
  FOURTH: "FOURTH",
  FIFTH: "FIFTH",
  LOSER: "LOSER",
};

const WINNING_PRIZE = {
  [RANK.FIRST]: 2000000000,
  [RANK.SECOND]: 30000000,
  [RANK.THIRD]: 1500000,
  [RANK.FOURTH]: 50000,
  [RANK.FIFTH]: 5000,
  [RANK.LOSER]: 0,
};

const ALERT_MESSAGE = {
  INVALID_NUMBER: "문자 및 공백은 입력 불가능합니다.",
  INVALID_MONEY_RANGE: "1000원 이상, 5000원 이하만 입력 가능합니다.",
  NOT_THOUSAND_MULTIPLES: "1000원 단위로만 입력 가능합니다.",

  BLANK_INCLUDED: "공백은 입력 불가능합니다.",
  INVALID_NUMBER_RANGE: "1에서 45까지의 숫자만 입력 가능합니다.",
  DUPLICATED_WINNING_NUMBER: "중복된 값은 입력 불가능합니다.",
  NO_BALANCE: "잔액이 부족합니다.",
};

const ERROR_MESSAGE = {
  INVALID_NUMBER: "올바르지 않은 숫자입니다.",
};

const MESSAGE = {
  MONEY_SUBMITTED: "MONEY_SUBMITTED",
  AUTO_NUMBER_PURCHASE_BUTTON_CLICKED: "AUTO_NUMBER_PURCHASE_BUTTON_CLICKED",
  MANUAL_NUMBER_PURCHASE_BUTTON_CLICKED:
    "MANUAL_NUMBER_PURCHASE_BUTTON_CLICKED",
  MANUAL_NUMBERS_CREATED: "MANUAL_NUMBERS_CREATED",
  MANUAL_NUMBERS_NOT_CREATED: "MANUAL_NUMBERS_NOT_CREATED",
  PURCHASE_PAYMENT_BUTTON_CLICKED: "PURCHASE_PAYMENT_BUTTON_CLICKED",
  TICKET_ADDED_AS_BALANCE: "TICKET_ADDED_AS_BALANCE",
  WINNING_NUMBER_SUBMITTED: "WINNING_NUMBER_SUBMITTED",
  WINNING_NUMBER_SET: "WINNING_NUMBER_SET",
  TICKET_BUNDLE_PASSED: "TICKET_BUNDLE_PASSED",
  MONEY_TOTAL_PRIZE_MATCHING_COUNT_PREPARED:
    "MONEY_TOTAL_PRIZE_MATCHING_COUNT_PREPARED",
  RESTART_BUTTON_CLICKED: "RESTART_BUTTON_CLICKED",
};

export {
  ELEMENT,
  STANDARD_NUMBER,
  RANK,
  WINNING_PRIZE,
  ALERT_MESSAGE,
  ERROR_MESSAGE,
  MESSAGE,
};
