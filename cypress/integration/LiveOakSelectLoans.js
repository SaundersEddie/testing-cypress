// Scenario:
// Given I am on the Live Oak Bank webpage
// When I click the Loans navbar option
// I should be on the small business loan page

///<reference type = "cypress">

describe ('Testing Live Oak Bank Navbar', () => {
    beforeEach(() => {
        // Some wierd error on the main site, this will allow Cypress
        // to contiue executing.
        cy.on('uncaught:exception', (err, runnable) => {
        return false
        })
        cy.openLiveOakSite();
    });

    it ('Navbar Testing', () => {
        let loansItem = cy.contains("Loans")
        
        loansItem.click();

    })



});