describe('Registration', () => {
  it('3 symbols password', () => {
    cy.viewport(1440, 900); 
    cy.visit('https://demo.opencart.com/',);
    cy.location('protocol').should('eq', 'https:');
   const randomEmail = `testuser_${Math.random().toString(36).substring(2, 10)}@example.com`

    cy.contains('My Account').click() 
    cy.contains('Register').click()  
    cy.get('input[name="firstname"]').type('Name')
    cy.get('input[name="lastname"]').type('last')  
    cy.get('input[name="email"]').type(randomEmail) 
    cy.get('input[name="password"]').type('123')  
    cy.get('input[name="agree"]').check()
    cy.contains('Continue').click()  
    cy.contains('Password must be between 4 and 20 characters!').should('be.visible'); 
  })
})
