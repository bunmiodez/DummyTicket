
describe('Demonstrating Select Dropdown', () => {
  before(function () {
    cy.fixture('elements').as('els')
    // this.els = els;
  })
  
  it('DummyTicket Travel Form', function()  {
    cy.visit('/')
    cy.clickAnyElement(this.els.buyticketsbtn)
    cy.clickAnyElement(this.els.RadioDummyTicketandHotel)
    cy.PersonalDetailsForm('John', 'Doe', '1','4','2023', 'Male') 
    cy.TravelDetails('One Way', 'London', 'Abuja', '20','11','2025', 'Needs extra leg room')
    cy.DeliveryOption( 'Visa extension', '15', '12', '2025', 'Email')
    cy.BillingDetails('07398381236', 'test@gmail.com', 'United Kingdom', '25 Fakorede Avenue', 'Ramsgate', 'Lagos', 'TN240GP')
    cy.wait(2000)
    cy.PaymentDetails('5355221307384893', '12/27', '679')
    cy.clickAnyElement(this.els.PlaceOrderbtn)
    cy.wait(15000) 
    cy.verifyAnyElement(this.els.AlertError)  

    })
        
     
     
})
  