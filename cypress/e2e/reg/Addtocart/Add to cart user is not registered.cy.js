describe('Add to cart user is not registered', () => {

  it('Add to cart user is not registered', () => {
    cy.viewport(1440, 900); 
    cy.visit('https://demo.opencart.com/',);
    cy.location('protocol').should('eq', 'https:');
    cy.get(':nth-child(1) > .product-thumb > .content > form > .button-group > [formaction="https://demo.opencart.com/en-gb?route=checkout/cart.add"]').click()
    cy.scrollTo('top');
    cy.contains(' 1 item(s) - $602.00').should('be.visible'); 
    cy.wait(5000);
    cy.get('.dropdown > .btn-lg').click()
    cy.get('[href="https://demo.opencart.com/en-gb?route=checkout/cart"] > strong').click({ timeout: 3000 })
    cy.contains('$602.00').should('be.visible');
    cy.get('.input-group > .btn-danger').click()
    cy.contains('Shopping Cart').should('be.visible'); 

  })
})


