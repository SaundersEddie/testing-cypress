///<reference types="cypress" />

// As a user
// I wish to open the UK Coronavirus Site
// Then ensure the UK Summary section is visible
// And confirm the People Vaccinated Stats are visible

describe ("Testing layout of the UK Coronavirus Website", () => {

    beforeEach(() => {
        cy.openUKCovidSite();
    })

    it ("Checking Base Layout", () => {
        console.log ("Test")
    })
})

