describe(" invalid Registration", () => {
  it("invalid Registration", () => {
    cy.visit("/");
    cy.location("protocol").should("eq", "https:");
    const randomEmail = `testuser_${Math.random().toString(36).substring(2, 10)}@example.com`;

    cy.contains("My Account").click();
    cy.contains("Register").click();
    cy.contains("Continue").click();
    cy.contains("First Name must be between 1 and 32 characters!").should(
      "be.visible",
    );
    cy.contains("Last Name must be between 1 and 32 characters!").should(
      "be.visible",
    );
    cy.contains("E-Mail Address does not appear to be valid!").should(
      "be.visible",
    );
    cy.contains("Password must be between 4 and 20 characters!").should(
      "be.visible",
    );
    cy.contains(" Warning: You must agree to the Privacy Policy!").should(
      "be.visible",
    );
  });
});
