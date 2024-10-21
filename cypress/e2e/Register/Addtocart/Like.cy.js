describe('like', () => {

  it('like', () => {
    cy.viewport(1440, 900); 
    cy.visit('https://demo.opencart.com/',);
    cy.location('protocol').should('eq', 'https:');
   

    cy.contains('My Account').click() 
    cy.contains('Login').click()  
    cy.get(('#input-email')).type('testh@example.com')
    cy.get(('#input-password')).type('1234')  
    cy.get('#form-login > .text-end > .btn').click()  
    cy.contains('My Account').should('be.visible') 
    cy.wait(4000); 
    cy.get('#logo > a > .img-fluid').click() 
    cy.get(':nth-child(2) > .product-thumb > .content > form > .button-group > [formaction="https://demo.opencart.com/en-gb?route=account/wishlist.add"]').click() 
   cy.contains(' Wish List (1)').should('be.visible'); 
   cy.get('#wishlist-total > .d-none').scrollIntoView().click(); 
   cy.get('.btn-danger').click() 
     
      })
    })
    

