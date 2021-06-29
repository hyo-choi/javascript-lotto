import * as C from '../../build/js/constant/constants.js';

describe('Lotto app (step 1)', () => {
  it('renders all', () => {
    cy.visit('/');
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

  context('when entered budget', () => {
    it('refuses invalid budget inputs', () => {
      cy.on('window:alert', (txt) => {
        expect(txt).contains('');
        }
      );
      cy.get(C.BUDGET_BUTTON).click();
      cy.get(C.BUDGET_INPUT).clear().type('forty-two').get(C.BUDGET_BUTTON).click();
      cy.get(C.BUDGET_INPUT).clear().type('-42').get(C.BUDGET_BUTTON).click();
      cy.get(C.BUDGET_INPUT).clear().type('42').get(C.BUDGET_BUTTON).click();
    });

    it('gets valid budget inputs', () => {
      cy.get(C.BUDGET_INPUT).clear().type('1000').get(C.BUDGET_BUTTON).click()
        .get(C.COUNT_FORM).should('be.visible')
        .get(C.COUNT_AUTO_INPUT).invoke('val').should('be.equal', '1');
      cy.get(C.BUDGET_INPUT).clear().type('4242').get(C.BUDGET_BUTTON).click()
        .get(C.COUNT_FORM).should('be.visible')
        .get(C.COUNT_AUTO_INPUT).invoke('val').should('be.equal', '4');
      cy.get(C.BUDGET_INPUT).clear().type('42424').get(C.BUDGET_BUTTON).click()
        .get(C.COUNT_FORM).should('be.visible')
        .get(C.COUNT_AUTO_INPUT).invoke('val').should('be.equal', '42');
      cy.get(C.BUDGET_INPUT).clear().type('4242424').get(C.BUDGET_BUTTON).click()
        .get(C.COUNT_FORM).should('be.visible')
        .get(C.COUNT_AUTO_INPUT).invoke('val').should('be.equal', '4242');
    });
  });

  context('when entered cost 10000', () => {
    it('purchases 10 lotto tickets', () => {
      cy.get(C.BUDGET_INPUT).clear().type('10000').get(C.BUDGET_BUTTON).click()
        .get(C.COUNT_FORM).should('be.visible')
        .get(C.COUNT_BUTTON).click();
      cy.get(C.LOTTO_NUMBERS).should('be.visible')
        .get(C.LOTTO_COUNT).contains('10')
        .get(C.LOTTO_TICKETS).find(C.LOTTO_NUMBER).its('length').should('be.equal', 10);
    });

    it('toggles numbers of each tickets', () => {
      cy.get(C.LOTTO_NUMBER_BUTTON).click({force: true})
        .get(C.LOTTO_TICKETS).find(C.LOTTO_NUMBER).should('be.visible');
      cy.get(C.LOTTO_NUMBER_BUTTON).click({force: true})
        .get(C.LOTTO_TICKETS).find(C.LOTTO_NUMBER).should('not.be.visible');
      cy.get(C.LOTTO_NUMBER_BUTTON).click({force: true})
        .get(C.LOTTO_TICKETS).find(C.LOTTO_NUMBER).should('be.visible');
      cy.get(C.LOTTO_NUMBER_BUTTON).click({force: true})
        .get(C.LOTTO_TICKETS).find(C.LOTTO_NUMBER).should('not.be.visible');
    })
  });

  context('when entered cost 50000', () => {
    it('purchases 50 lotto tickets', () => {
      cy.get(C.BUDGET_INPUT).clear().type('50000').get(C.BUDGET_BUTTON).click()
        .get(C.COUNT_FORM).should('be.visible')
        .get(C.COUNT_BUTTON).click();
      cy.get(C.LOTTO_NUMBERS).should('be.visible')
        .get(C.LOTTO_COUNT).contains('50')
        .get(C.LOTTO_TICKETS).find(C.LOTTO_NUMBER).its('length').should('be.equal', 50);
    });

    it('toggles numbers of each tickets', () => {
      cy.get(C.LOTTO_NUMBER_BUTTON).click({force: true})
        .get(C.LOTTO_TICKETS).find(C.LOTTO_NUMBER).should('be.visible');
      cy.get(C.LOTTO_NUMBER_BUTTON).click({force: true})
        .get(C.LOTTO_TICKETS).find(C.LOTTO_NUMBER).should('not.be.visible');
      cy.get(C.LOTTO_NUMBER_BUTTON).click({force: true})
        .get(C.LOTTO_TICKETS).find(C.LOTTO_NUMBER).should('be.visible');
      cy.get(C.LOTTO_NUMBER_BUTTON).click({force: true})
        .get(C.LOTTO_TICKETS).find(C.LOTTO_NUMBER).should('not.be.visible');
    })
  });
});
