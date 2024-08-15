describe('Check-account', () => {
  
it('Account-details', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
 

    cy.get("input[name='username']").type("test1");
    cy.get("input[name='password']").type('password');
    //login button
    cy.get('form').contains('Log In').click();

    cy.get('#accountTable > tbody > tr:nth-child(1) > td:nth-child(1) > a').click();
    cy.get('#month',{timeout:2000}).select(2);
    cy.get('#month',{timeout:3000}).select("May");
});

})
