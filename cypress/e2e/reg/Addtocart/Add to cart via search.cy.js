describe('Add to cart via search ', () => {

  it('Add to cart via search ', () => {
    cy.viewport(1440, 900); 
    cy.visit('https://demo.opencart.com/',);
    cy.location('protocol').should('eq', 'https:');
   

    cy.contains('My Account').click() 
    cy.contains('Login').click()  
    cy.get(('#input-email')).type('testh@example.com')
    cy.get(('#input-password')).type('1234')  
    cy.get('#form-login > .text-end > .btn').click()  
    cy.contains('My Account').should('be.visible'); 
    cy.get('#wishlist-total > .d-none').scrollIntoView().click();  
    cy.get('.form-control').type('mac').type('{enter}');
    cy.get(':nth-child(1) > .product-thumb > .content > .description > h4 > a').click()  
    cy.get('#button-cart').click(); 
    cy.get('.dropdown > .btn-lg').click(); 
    cy.wait(5000);
    cy.get('.dropdown > .btn-lg').click()
    cy.get('[href="https://demo.opencart.com/en-gb?route=checkout/cart"] > strong').click({ timeout: 3000 })
    cy.contains('$122.00').should('be.visible');
    cy.get('.input-group > .btn-danger').click()
    cy.contains('Shopping Cart').should('be.visible'); 
  })
})
