describe('Valid Registration', () => {
  it('Registratemail email with domain only', () => {
    cy.viewport(1440, 900); 
    cy.visit('https://demo.opencart.com/',);
    cy.location('protocol').should('eq', 'https:');


    cy.contains('My Account').click() 
    cy.contains('Register').click()  
    cy.get('input[name="firstname"]').type('Name')
    cy.get('input[name="lastname"]').type('last')  
    cy.get('input[name="email"]').type("@example.com") 
    cy.get('input[name="password"]').type('1234')  
    cy.get('input[name="agree"]').check()
    cy.contains('Continue').click()  
    cy.contains('E-Mail Address does not appear to be valid!').should('be.visible'); 
  })
})
