describe('Add multiple products to your cart', () => {

  it('Add multiple products to your cart', () => {
    cy.viewport(1440, 900); 
    cy.visit('https://demo.opencart.com/',);
    cy.location('protocol').should('eq', 'https:');
   

    cy.contains('My Account').click() 
    cy.contains('Login').click()  
    cy.get(('#input-email')).type('testh@example.com')
    cy.get(('#input-password')).type('1234')  
    cy.get('#form-login > .text-end > .btn').click()  
    cy.contains('My Account').should('be.visible'); 
  })
})
