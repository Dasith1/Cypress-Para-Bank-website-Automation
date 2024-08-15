
/// <reference types="Cypress"/>

describe('Check upload file', () => {
  

    it('Check file', () => {
        
        cy.visit("https://ps.uci.edu/~franklin/doc/file_upload.html")
        cy.get('input[type=file]').scrollIntoView();
        cy.get('input[type=file]').selectFile("C:\\Users\\ASUS\\Desktop\\test1-doc.txt");
    })
})
