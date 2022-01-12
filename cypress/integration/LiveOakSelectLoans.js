// Scenario:
// Given I am on the Live Oak Bank webpage
// When I click the Loans navbar option
// I should be on the small business loan page

///<reference type = "cypress">

describe ('Testing Live Oak Bank Loans page', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            expect (err.message).to.include("SyntaxError:")
            done()
            return false
        })
        cy.openLiveOakSite();
    });

    it ('Confirm we can open the small-business-loans page', () => {
        console.log ("Inside Banks");

        cy.get('#menu-item-54 > a').click();

        // cy.contains("#navWrap", "LOANS").click()
    })



});