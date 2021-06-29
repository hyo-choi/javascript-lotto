import * as C from '../../build/js/constant/constants.js';

const buyTickets = (numbers) => {
  cy.get(C.MANUAL_INPUT).each(($input, idx) => {
    console.log(idx);
    cy.wrap($input).clear().type(numbers[idx % 6]);
  })
  cy.get(C.MANUAL_BUTTON).click();
};

const inputWinningNumbers = (numbers) => {
  let i = 0;
  cy.get(C.WINNING_INPUT).each(($input) => {
        cy.wrap($input).clear().type(numbers[i]);
        i += 1;
      })
      .get(C.BONUS_INPUT).clear().type(numbers[6])
      .get(C.RESULT_BUTTON).click();
};

describe('Lotto app (step 3)', () => {
  it('inits', () => {
    cy.visit('/');
  })

  context('when entered manual ticket count', () => {
    it('inits', () => {
      cy.get(C.BUDGET_INPUT).clear().type('12345')
        .get(C.BUDGET_BUTTON).click()
        .get(C.COUNT_FORM).should('be.visible');
    });

    it('refuses invalid count inputs', () => {
      cy.on('window:alert', (txt) => {
        expect(txt).contains('');
        }
      );
      cy.get(C.COUNT_MANUAL_INPUT).clear().type(-1).blur();
      cy.get(C.COUNT_MANUAL_INPUT).clear().type(13).blur();
    });

    it('gets valid count inputs', () => {
      cy.get(C.COUNT_MANUAL_INPUT).clear().type(1).blur()
        .get(C.COUNT_AUTO_INPUT).invoke('val').should('be.equal', '11')
        .get(C.COUNT_BUTTON).click()
        .get(C.MANUAL_FORM).should('be.visible')
        .find(C.MANUAL_P).its('length').should('be.equal', 1);

      cy.get(C.COUNT_MANUAL_INPUT).clear().type(5).blur()
        .get(C.COUNT_AUTO_INPUT).invoke('val').should('be.equal', '7')
        .get(C.COUNT_BUTTON).click()
        .get(C.MANUAL_FORM).should('be.visible')
        .find(C.MANUAL_P).its('length').should('be.equal', 5);

      cy.get(C.COUNT_MANUAL_INPUT).clear().type(12).blur()
        .get(C.COUNT_AUTO_INPUT).invoke('val').should('be.equal', '0')
        .get(C.COUNT_BUTTON).click()
        .get(C.MANUAL_FORM).should('be.visible')
        .find(C.MANUAL_P).its('length').should('be.equal', 12);
    });
  });

  context('when entered manual lotto inputs', () => {
    beforeEach(() => {
      cy.get(C.BUDGET_INPUT).clear().type('12345')
        .get(C.BUDGET_BUTTON).click();
    });

    it('refuses invalid lotto inputs', () => {
      cy.on('window:alert', (txt) => {
        expect(txt).contains('');
        }
      );

      cy.get(C.COUNT_MANUAL_INPUT).clear().type(1)
        .get(C.COUNT_BUTTON).click();
      
      cy.get(C.MANUAL_BUTTON).click();

      buyTickets([-1, 2, 3, 4, 5, 6]);
      buyTickets([1, 1, 3, 4, 5, 6]);
      buyTickets([41, 42, 43, 44, 45, 46]);
    });

    it('gets valid lotto inputs (1)', () => {
      cy.get(C.COUNT_MANUAL_INPUT).clear().type(1)
        .get(C.COUNT_BUTTON).click();

      buyTickets([1, 2, 3, 4, 5, 6]);
      cy.get(C.LOTTO_NUMBERS).should('be.visible');
      cy.get(C.LOTTO_NUMBER_BUTTON).click({force: true})
        .get(C.LOTTO_NUMBER).should('contain.text', '1 2 3 4 5 6');
    });

    it('gets valid lotto inputs (2)', () => {
      cy.get(C.COUNT_MANUAL_INPUT).clear().type(3)
        .get(C.COUNT_BUTTON).click();

      buyTickets([1, 2, 3, 4, 5, 6]);
      cy.get(C.LOTTO_NUMBERS).should('be.visible');
      cy.get(C.LOTTO_NUMBER_BUTTON).click({force: true})
        .get(C.LOTTO_NUMBER).should('contain.text', '1 2 3 4 5 61 2 3 4 5 61 2 3 4 5 6');
    });
  });

  context('when entered budget 1234', () => {
    it('purchases 1 manual ticket', () => {
      cy.get(C.BUDGET_INPUT).clear().type('1234')
        .get(C.BUDGET_BUTTON).click()
        .get(C.COUNT_MANUAL_INPUT).clear().type(1)
        .get(C.COUNT_BUTTON).click();
      
      buyTickets([1, 2, 3, 4, 5, 6]);
      inputWinningNumbers([1, 2, 3, 4, 5, 6, 7]);
      cy.get('tr').last().find('td').last().should('have.text', '1개');
      cy.get(C.MODAL_CLOSE).click();
      inputWinningNumbers([1, 2, 3, 4, 5, 7, 6]);
      cy.get('tr').last().prev().find('td').last().should('have.text', '1개');
      cy.get(C.MODAL_CLOSE).click();
      inputWinningNumbers([1, 2, 3, 4, 5, 7, 8]);
      cy.get('tr').last().prev().prev().find('td').last().should('have.text', '1개');
      cy.get(C.MODAL_CLOSE).click();
      inputWinningNumbers([1, 2, 3, 4, 7, 8, 9]);
      cy.get('tr').last().prev().prev().prev().find('td').last().should('have.text', '1개');
      cy.get(C.MODAL_CLOSE).click();
      inputWinningNumbers([1, 2, 3, 7, 8, 9, 10]);
    });
  })
});
