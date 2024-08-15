
/// <reference types="Cypress"/>
describe('template spec', () => {
  it('launch', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
 

    cy.get("input[name='username']").type("test1");
    cy.get("input[name='password']").type('password');
    //login button
    cy.get('form').contains('Log In').click();



  })

 
})