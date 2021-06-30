/* eslint-disable import/no-unresolved */
import {
  LOTTO_COUNT,
  LOTTO_NUMBER,
  LOTTO_TICKETS,
} from '../constant/constants.js';

const setTicketNumbers = (count: number) => {
  const $counter: HTMLLabelElement = document.querySelector(LOTTO_COUNT)!;

  $counter.textContent = `총 ${count}개를 구매하였습니다.`;
};

const addTicket = (numbers: readonly number[]) => {
  const $ticketsDiv: HTMLDivElement = document.querySelector(LOTTO_TICKETS)!;

  $ticketsDiv.insertAdjacentHTML('beforeend', `
    <span>
      <span class="mx-1 text-4xl">🎟️</span>
      <span class="lotto-numbers-tickets__number hidden">${numbers.join(' ')}</span>
    </span>
  `);
};

const resetTickets = () => {
  const $ticketsDiv: HTMLDivElement = document.querySelector(LOTTO_TICKETS)!;
  $ticketsDiv.textContent = '';
};

const toggleTicketNumbers = (e: MouseEvent) => {
  const target: HTMLInputElement = e.target as HTMLInputElement;
  const $ticketDiv: HTMLDivElement = document.querySelector(LOTTO_TICKETS)!;
  const $tickets = document.querySelectorAll(LOTTO_NUMBER);

  if (target.checked) {
    $ticketDiv.classList.add('flex-col');
    $tickets.forEach(($ticket) => {
      $ticket.classList.remove('hidden');
    });
  } else {
    $ticketDiv.classList.remove('flex-col');
    $tickets.forEach(($ticket) => {
      $ticket.classList.add('hidden');
    });
  }
};

export {
  setTicketNumbers,
  addTicket,
  resetTickets,
  toggleTicketNumbers,
};
