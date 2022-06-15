   
import "cypress-localstorage-commands"

describe('empty spec', () => {
  const wrongEmail = "fayek"
  const wrongPassword = "121212"
  const username = "rafian@techetronventures.com"
  const password = "123456"

  beforeEach(()=>{
    // cy.window().its('store').invoke('getState').then(($state)=>console.log($state));
  })

  it('Login has a title', () => {
    cy.visit("/")
    cy.contains("This is a login page")
  })

  it("check private route",()=>{
    cy.get('[data-testid="home-btn"]').click();
    
   })

  it("check persistensy",()=>{
    cy.login(username,password)

    // ways of checking 

    // way - 1
    cy.contains("Welcome").should("exist")

    // way -2
    cy.get(".container > h1")

    // way - 3 // preffered
    cy.get("h1[data-testid=welcome-text]")

    cy.get("h1[data-testid=welcome-text]").should("have.text" ,"Welcome")

    cy.visit("/login")
    cy.url().should("eq","http://localhost:3000/")
  })
})