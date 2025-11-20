let elementsData

before(() => {
  cy.fixture('elements').then((data) => {
    elementsData = data;
  })
})


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
//    cy.get('button[data-handler="hide"]').click()
    });

Cypress.Commands.add('selectFromDropdown', (selector, optionText) => {
  cy.get(selector).click()
  cy.get('.select2-results__options')
  .should('be.visible').contains(optionText).click();
           
    })



Cypress.Commands.add('PersonalDetailsForm', (firstName, lastName, day,month, year, sex) => {
    
    cy.insertAnyText(elementsData.FirstName, firstName)
    cy.insertAnyText(elementsData.LastName, lastName)
    cy.selectDate(elementsData.DoB, day, month,year)
    cy.clickAnyElement(elementsData.SexMale)
    

})

Cypress.Commands.add('TravelDetails', (Trip, From, Destination, departDay, departMonth, departYear, addInfo) => {
    cy.clickAnyElement(elementsData.TripType)
    cy.insertAnyText(elementsData.FromCity, From)
    cy.insertAnyText(elementsData.ToDestination, Destination)
    cy.selectDate(elementsData.DepartureDate, departDay, departMonth, departYear)
    cy.insertAnyText(elementsData.AdditionalInfo, addInfo)

})


Cypress.Commands.add('DeliveryOption', (purposeOfTravelTicket, ApptDay, ApptDate, AppYear,DeliveryMethod) => {

    cy.selectFromDropdown(elementsData.PurposeofTicket, purposeOfTravelTicket)
    // cy.selectDate(elementsData.AppointmentDate, ApptDay, ApptDate, AppYear)
    cy.clickAnyElement(elementsData.RadioDeliveryMethodBtn, DeliveryMethod)

})

Cypress.Commands.add('BillingDetails', (phone, email, country, streetAddress, town, county, postCode) => {

    cy.insertAnyText(elementsData.Phone, phone)
    cy.insertAnyText(elementsData.Email, email)
    cy.selectFromDropdown(elementsData.Country, country)
    cy.insertAnyText(elementsData.StreetAddress, streetAddress)
    cy.insertAnyText(elementsData.Town, town)
    cy.insertAnyText(elementsData.County, county)
    cy.insertAnyText(elementsData.PostCode, postCode)
})

Cypress.Commands.add('PaymentDetails', ( cardNumber, cardExpiry, cvcCode) => {
    cy.clickAnyElement(elementsData.RadioCardPaymentBtn)
    cy.get(elementsData.PaymentIframe).should('be.visible').wait(3000)
    .its('0.contentDocument.body')
    .then(($element)=>{
        cy.wrap($element).within(()=>{
            
            cy.insertAnyText(elementsData.CardNumberField, cardNumber)
            cy.get(elementsData.CardEpiryDate).type(cardExpiry)
            cy.get(elementsData.CVCSecurityCode).type(cvcCode)
            
        })
    })


})  

