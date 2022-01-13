// ***********************************************
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('openUKCovidSite', () => {
    // Open Base Site then close out cookie request and hide the banner
    cy.visit('https://coronavirus.data.gov.uk/');
    cy.url().should('eq','https://coronavirus.data.gov.uk/')
    cy.get("#reject-cookies").click()
    cy.get("#hide-cookie-decision").click()
})

Cypress.Commands.add('UKCovidAPI', () => {
    // https://api.coronavirus.data.gov.uk/v1/data
    // This will not likely need to be used, but using it to store API link
})

//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
