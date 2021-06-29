import * as C from '../../build/js/constant/constants.js';

const inputWinningNumbers = (numbers) => {
  let i = 0;
  cy.get(C.WINNING_INPUT).each(($input) => {
        cy.wrap($input).clear().type(numbers[i]);
        i += 1;
      })
      .get(C.BONUS_INPUT).clear().type(numbers[6])
      .get(C.RESULT_BUTTON).click();
};

describe('Lotto app (step 2)', () => {
  it('inits for test', () => {
    cy.visit('/');
    cy.get(C.BUDGET_INPUT).type('12345')
      .get(C.BUDGET_BUTTON).click()
      .get(C.COUNT_FORM).should('be.visible')
      .get(C.COUNT_BUTTON).click();
    cy.get(C.LOTTO_NUMBERS).should('be.visible')
      .get(C.LOTTO_COUNT).contains('12')
      .get(C.LOTTO_TICKETS).find(C.LOTTO_NUMBER).its('length').should('be.equal', 12);
  });

  context('when entered winning numbers', () => {
    it('refuses invalid numbers', () => {
      cy.on('window:alert', (txt) => {
        expect(txt).contains('');
        }
      );
      cy.get(C.RESULT_BUTTON).click();

      inputWinningNumbers([-1, 1, 2, 3, 4, 5, 6]);
      inputWinningNumbers([1, 1, 2, 3, 4, 5, 6]);
      inputWinningNumbers([41, 42, 43, 44, 45, 46, 47]);
    });

    it('shows game result for valid numbers', () => {
      inputWinningNumbers([1, 2, 3, 4, 5, 6, 7]);
      cy.get(C.MODAL).should('be.visible');
    });
  });

  context('when entered valid numbers', () => {
    it('toggles modal window', () => {
      cy.get(C.MODAL_CLOSE).click()
        .get(C.RESULT_BUTTON).click()
        .get(C.MODAL_CLOSE).click()
        .get(C.RESULT_BUTTON).click();
    });

    it('resets when reset button clicked', () => {
      cy.get(C.RESULT_RESET_BUTTON).click();
      cy.get(C.BUDGET_INPUT).should('be.visible');
      cy.get(C.BUDGET_BUTTON).should('be.visible');
      cy.get(C.COUNT_FORM).should('not.be.visible');
      cy.get(C.COUNT_BUTTON).should('not.be.visible');
      cy.get(C.MANUAL_FORM).should('not.be.visible');
      cy.get(C.LOTTO_NUMBERS).should('not.be.visible');
      cy.get(C.LOTTO_TICKETS).should('not.be.visible');
      cy.get(C.LOTTO_NUMBER_BUTTON).should('not.be.visible');
      cy.get(C.WINNING_FORM).should('not.be.visible');
      cy.get(C.RESULT_BUTTON).should('not.be.visible');
      cy.get(C.MODAL).should('not.be.visible');
      cy.get(C.MODAL_CLOSE).should('not.be.visible');
    });
  });
});
