Cypress.Commands.add('clickAnyElement',(element) => {
        return cy.get(element).should('be.visible').click()
    })

Cypress.Commands.add('SelectAnyElement',(element) => {
     cy.get(element).should('before.visible').click()
    })

Cypress.Commands.add('insertAnyText',(element, text) => {
        return cy.get(element).type(text)
    })

 Cypress.Commands.add('verifyAnyElement',(element)=>{
        return cy.get(element).should('be.visible')
    })

Cypress.Commands.add('verifyElementText',(element, text)=>{
        return cy.get(element).should('be.visible').and('contain.text', text)
    })

Cypress.Commands.add('selectDate', (selector, day, month, year ) => {
  cy.get(selector).click();
  cy.get('.ui-datepicker-month').select(month);
  cy.get('.ui-datepicker-year').select(year.toString());
  cy.get(`.ui-state-default[data-date="${day}"]`).click();
   cy.get('button[data-handler="hide"]').click()
    });

Cypress.Commands.add('selectFromDropdown', (selector, optionText) => {
  cy.get(selector).click()
  cy.get('.select2-results__options')
  .should('be.visible').contains(optionText).click();

    
})