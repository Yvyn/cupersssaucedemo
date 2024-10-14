describe('Мій перший тест dslrhbnnz cnjhsrb' , () => {
    it('Перевіряє заголовок сторінки', () => {
      cy.visit("https://www.saucedemo.com/")  // Відвідуємо сторінку
      cy.title().should('include', 'Swag Labs')  // Перевіряємо заголовок сторінки
    })
  })
  