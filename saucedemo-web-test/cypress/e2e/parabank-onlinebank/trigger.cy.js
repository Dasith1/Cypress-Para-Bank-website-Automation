describe('Launch', () => {
  
    it('Trigger test', () => {
        cy.visit("https://www.mitesp.com/")
        cy.get('.position-static > #navbarDropdownMenuLink').invoke('show');
        cy,get('#menu-item-690 > a > "https://www.mitesp.com/cloud/"').click();

    });
})
