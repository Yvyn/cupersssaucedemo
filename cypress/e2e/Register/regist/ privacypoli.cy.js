describe('Valid Registration', () => {
  it('Registration', () => {
    cy.viewport(1440, 900); 
    cy.visit('https://demo.opencart.com/',);
    cy.location('protocol').should('eq', 'https:');

   const randomEmail = `testuser_${Math.random().toString(36).substring(2, 10)}@example.com`

    cy.contains('My Account').click() 
    cy.contains('Register').click()  
    cy.get('input[name="firstname"]').type('Name').should('have.value', 'Name');
    cy.get('input[name="lastname"]').type('last').should('be.visible');   
    cy.get('input[name="email"]').type(randomEmail).should('be.visible');  
    cy.get('input[name="password"]').type('1234')  
    cy.contains('Continue').click()  
    cy.contains('Warning: You must agree to the Privacy Policy!').should('be.visible'); 

  })
})
