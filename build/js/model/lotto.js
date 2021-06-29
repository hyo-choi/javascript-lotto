/* eslint-disable import/no-unresolved */
import { BUDGET_INPUT, COUNT_AUTO_INPUT, COUNT_FORM, COUNT_MANUAL_INPUT, LOTTO_NUMBERS, LOTTO_NUMBER_BUTTON, MANUAL_FORM, PRIZE, WINNING_FORM, } from '../constant/constants.js';
import { showElement, enableInput, hideElement, uncheckButton, closeModal, } from '../view/display.js';
import { setInputValue, setInputMinMax } from '../view/input.js';
import setManualPurchaseDiv from '../view/purchase.js';
import { addTicket, resetTickets, setTicketNumbers } from '../view/print.js';
import { resetWinningInputs, setResult } from '../view/result.js';
import Ticket from './ticket.js';
const makeRandomLotto = () => {
    const set = new Set();
    while (set.size < 6) {
        set.add((Math.floor(Math.random() * 100) % 45) + 1);
    }
    return Array.from(set);
};
class Lotto {
    constructor() {
        this.cost = 0;
        this.manualCount = 0;
        this.autoCount = 0;
        this.tickets = [];
    }
    handleBudget(budget) {
        const max = Math.floor(budget / 1000);
        this.cost = max * 1000;
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
    handleCount(manual, auto) {
        hideElement(LOTTO_NUMBERS);
        hideElement(WINNING_FORM);
        this.tickets.length = 0;
        this.manualCount = manual;
        this.autoCount = auto;
        if (!manual && auto) {
            this.handleAutoPurchase();
        }
        else if (manual) {
            setManualPurchaseDiv(manual);
        }
    }
    handleManualPurchase(numbers) {
        numbers.forEach((number) => this.tickets.push(new Ticket(number)));
    }
    handleAutoPurchase() {
        if (!this.autoCount) {
            return;
        }
        for (let i = 0; i < this.autoCount; i += 1) {
            this.tickets.push(new Ticket(makeRandomLotto()));
        }
        this.handlePurchaseDone();
    }
    handlePurchaseDone() {
        hideElement(COUNT_FORM);
        hideElement(MANUAL_FORM);
        uncheckButton(LOTTO_NUMBER_BUTTON);
        resetTickets();
        setTicketNumbers(this.tickets.length);
        this.tickets.forEach((ticket) => {
            addTicket(ticket.numbers);
        });
        resetWinningInputs();
        showElement(LOTTO_NUMBERS);
        showElement(WINNING_FORM);
    }
    handleResultInput(result, bonus) {
        const array = Array(6);
        array.fill(0);
        this.tickets.forEach((ticket) => {
            array[ticket.getGameResult(result, bonus)] += 1;
        });
        const prize = array.reduce((acc, num, idx) => acc + PRIZE[idx] * num, 0);
        setResult(array, prize === 0 ? '0' : ((prize / this.cost) * 100).toFixed(2));
    }
    reset() {
        this.cost = 0;
        this.tickets.length = 0;
        this.autoCount = 0;
        this.manualCount = 0;
        setInputValue(BUDGET_INPUT, '');
        hideElement(COUNT_FORM);
        hideElement(MANUAL_FORM);
        hideElement(LOTTO_NUMBERS);
        hideElement(WINNING_FORM);
        closeModal();
    }
}
export default Lotto;
