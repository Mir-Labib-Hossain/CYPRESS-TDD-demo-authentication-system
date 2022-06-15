/// <reference types="cypress" />
import "cypress-localstorage-commands";

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (username, password) => { 
    // cy.visit("http://localhost:3000/login")
    // cy.contains("This is a login page")
    // cy.request({
    //     method: 'POST',
    //     url: "https://api-dev.techetronventures.com/api/v1/auth/login",
    //     body: {
    //         user: {
    //             identifierType:"email",
    //             identifier: email,
    //         password: password,
    //         }
    //     }
    // })
    // .its('body')
    // .then((body) => {
    //     cy.setLocalStorage("token", body.token);
    //     // cy.setLocalStorage("refreshToken", body.refreshToken);
    // });
    cy.visit("/")
    cy.contains("This is a login page");
    // clear input field
    cy.get("input[name=username]").clear()
    cy.get("input[name=password]").clear()
    // fill input field
    cy.get("input[name=username]").type(username)
    cy.get("input[name=password]").type(password)
    cy.get('button[data-testid=submit]').click()
 })
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
//
declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>
    //   drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
    //   dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
    //   visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
    }
  }
}

 
// Cypress.Commands.add('login',(email, password)=>{

// })
 

