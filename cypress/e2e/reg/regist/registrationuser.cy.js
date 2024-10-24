describe("email was registered", () => {
  it("Registration", () => {
    cy.visit("/");
    cy.location("protocol").should("eq", "https:");
    cy.contains("My Account").click();
    cy.contains("Register").click();
    cy.get('input[name="firstname"]').type("Name");
    cy.get('input[name="lastname"]').type("last");
    cy.get('input[name="email"]').type("Test@gmail.com");
    cy.get('input[name="password"]').type("1234");
    cy.get('input[name="agree"]').check();
    cy.contains("Continue").click();
    cy.contains("Warning: E-Mail Address is already registered!").should(
      "be.visible",
    );
  });
});
