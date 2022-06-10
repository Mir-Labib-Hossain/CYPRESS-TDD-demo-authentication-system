   
describe('empty spec', () => {
  const email = "labib2GMAIL.COM"
  const pass = "123456"
  beforeEach(()=>{
    cy.visit('/') 

  })
  it('check if login exits',()=>{
    cy.get('[data-testid="Login-block"]')
  })
  it('Login has a title', () => {
    cy.contains("This is a login page")
   })

   it("block private route",()=>{
    //  cy.get()
   })
})