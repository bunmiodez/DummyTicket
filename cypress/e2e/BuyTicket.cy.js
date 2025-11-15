


describe('Buy Dummy Ticket - E2E Flow', () => {

   beforeEach(function () {
    cy.fixture('elements').as('els');
  });

  it('selects Dummy Ticket + Hotel and fills in traveller details', function () {
    
    cy.visit('https://www.dummyticket.com') 
    cy.clickAnyElement(this.els.buyticketsbtn)
    cy.clickAnyElement(this.els.RadioDummyTicketandHotel)
    cy.insertAnyText(this.els.FirstName, 'John')
    cy.insertAnyText(this.els.LastName, 'Doe')
    cy.wait(10000)
    cy.selectDate(this.els.DoB, '1','4','2023')
    cy.clickAnyElement(this.els.SexMale);
    // or: cy.clickAnyElement(this.els.SexFemale)
    cy.insertAnyText(this.els.OrderNotes, 'Please confirm my booking via email.')
    cy.verifyAnyElement(this.els.TripType)
    cy.insertAnyText(this.els.FromCity, 'London')
    cy.insertAnyText(this.els.ToDestination, 'Abuja')
    cy.selectDate(this.els.DepartureDate, '20','11','2025')
    cy.insertAnyText(this.els.AdditionalInfo, 'Needs extra leg room')
    cy.selectFromDropdown(this.els.PurposeofTicket, 'Visa extension')
    cy.clickAnyElement(this.els.RadioDeliveryMethodBtn)
    cy.insertAnyText(this.els.Phone, '07398381236')
    cy.insertAnyText(this.els.Email, 'ogtesters@gmail.coom')
    cy.selectFromDropdown(this.els.Country, 'United Kingdom')
    cy.insertAnyText(this.els.StreetAddress, '25 Fakorede Avenue')
    cy.insertAnyText(this.els.Town, 'Ramsgate')
    cy.insertAnyText(this.els.County, 'Lagos')
    cy.insertAnyText(this.els.PostCode, 'TN240GP')
    cy.wait(200000)
    cy.clickAnyElement(this.els.RadioPaymentBtn)
    cy.insertAnyText(this.els.CardNumberField, '5355221307384893')
    cy.insertAnyText(this.els.CardEpiryField, '12/27')
    cy.insertAnyText(this.els.CVCSecurityCode, '679')
    cy.clickAnyElement(this.els.PlaceOrderbtn)
    cy.verifyAnyElement(this.els.AlertError)

  

    
  });

});
