describe('Parabank', () => {
  
  it('Register', () => {
       cy.visit('https://parabank.parasoft.com/parabank/index.htm')
 //register

    cy.get(" #loginPanel > p:nth-child(3) > a").click();
    cy.get("input[id='customer.firstName']").type("test1");
    cy.get("input[id='customer.lastName']").type("last");
    cy.get("input[id='customer.address.street']").type("12,roi rd,NW");
    cy.get("input[id='customer.address.city']" ).type("NW");
    cy.get("input[id='customer.address.state']").type("WS");
    cy.get("input[id='customer.address.zipCode']").type("12345");
    cy.get("input[id='customer.phoneNumber']").type("123456789");
    cy.get("input[id='customer.ssn']" ).type("1234");
    cy.get("input[id='customer.username']").type("test1");
    cy.get("input[id='customer.password']" ).type("password")
    cy.get("#repeatedPassword").type("password");
    cy.get('[colspan="2"] > .button').click();
  });

})
