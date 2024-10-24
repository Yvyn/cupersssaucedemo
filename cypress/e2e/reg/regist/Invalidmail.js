describe("Registration", () => {
  it("email without @.", () => {
    cy.visit("/");
    cy.location("protocol").should("eq", "https:");
    const randomEmail = `testuser_${Math.random().toString(36).substring(2, 10)}example.com`;

    cy.contains("My Account").click();
    cy.contains("Register").click();
    cy.get('input[name="firstname"]').type("Name");
    cy.get('input[name="lastname"]').type("last");
    cy.get('input[name="email"]').type(randomEmail);
    cy.get('input[name="password"]').type("1234");
    cy.get('input[name="agree"]').check();
    cy.contains("Continue").click();
  });
});
x;
