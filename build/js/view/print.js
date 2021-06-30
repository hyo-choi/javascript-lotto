/* eslint-disable import/no-unresolved */
import { LOTTO_COUNT, LOTTO_NUMBER, LOTTO_TICKETS, } from '../constant/constants.js';
const setTicketNumbers = (count) => {
    const $counter = document.querySelector(LOTTO_COUNT);
    $counter.textContent = `총 ${count}개를 구매하였습니다.`;
};
const addTicket = (numbers) => {
    const $ticketsDiv = document.querySelector(LOTTO_TICKETS);
    $ticketsDiv.insertAdjacentHTML('beforeend', `
    <span>
      <span class="mx-1 text-4xl">🎟️</span>
      <span class="lotto-numbers-tickets__number hidden">${numbers.join(' ')}</span>
    </span>
  `);
};
const resetTickets = () => {
    const $ticketsDiv = document.querySelector(LOTTO_TICKETS);
    $ticketsDiv.textContent = '';
};
const toggleTicketNumbers = (e) => {
    const target = e.target;
    const $ticketDiv = document.querySelector(LOTTO_TICKETS);
    const $tickets = document.querySelectorAll(LOTTO_NUMBER);
    if (target.checked) {
        $ticketDiv.classList.add('flex-col');
        $tickets.forEach(($ticket) => {
            $ticket.classList.remove('hidden');
        });
    }
    else {
        $ticketDiv.classList.remove('flex-col');
        $tickets.forEach(($ticket) => {
            $ticket.classList.add('hidden');
        });
    }
};
export { setTicketNumbers, addTicket, resetTickets, toggleTicketNumbers, };
