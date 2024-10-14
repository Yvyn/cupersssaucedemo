describe('тест авторизації', () => {
  it('Авторизація', () => {
    cy.visit('https://www.saucedemo.com/')  // Відвідуємо сторінку
    cy.get('#user-name').type('standard_user')  // Вводимо ім'я користувача
    cy.get('#password').type('secret_sauce')  // Вводимо пароль
    cy.contains('Login').click()  // Знаходимо кнопку за текстом і клікаємо
  })
})
