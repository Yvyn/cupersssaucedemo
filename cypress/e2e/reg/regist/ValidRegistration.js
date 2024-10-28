describe("Valid Registration", () => {
  it("Registration", () => {
    cy.visit("/");
    cy.location("protocol").should("eq", "https:");

    const randomEmail = `testuser_${Math.random().toString(36).substring(2, 10)}@example.com`;

    cy.contains("My Account").click();
    cy.contains("Register").click();
    cy.get('input[name="firstname"]').type("Name").should("have.value", "Name");
    cy.get('input[name="lastname"]').type("last").should("be.visible");
    cy.get('input[name="email"]').type(randomEmail).should("be.visible");
    cy.get('input[name="password"]').type("1234");
    cy.contains("Continue").click();
    cy.contains("Warning: You must agree to the Privacy Policy!").should(
      "be.visible",
    );
  });

  it("Registration", () => {
    cy.visit("/");
    cy.location("protocol").should("eq", "https:");
    const randomEmail = `testuser_${Math.random().toString(36).substring(2, 10)}@example.com`;

    cy.contains("My Account").click();
    cy.contains("Register").click();
    cy.get('input[name="firstname"]').type("Name");
    cy.get('input[name="lastname"]').type("last");
    cy.get('input[name="email"]').type(randomEmail);
    cy.get('input[name="password"]').type("1234");
    cy.get('input[name="agree"]').check();
    cy.contains("Continue").click();
    cy.contains("Your Account Has Been Created!").should("be.visible");
  });

  it("Register with Subscribe", () => {
    cy.visit("/");

    cy.location("protocol").should("eq", "https:");
    const randomEmail = `testuser_${Math.random().toString(36).substring(2, 10)}@example.com`;

    cy.contains("My Account").click();
    cy.contains("Register").click();
    cy.get('input[name="firstname"]').type("Name");
    cy.get('input[name="lastname"]').type("last");
    cy.get('input[name="email"]').type(randomEmail);
    cy.get('input[name="password"]').type("1234");
    cy.get('input[name="agree"]').check();
    cy.get("#input-newsletter").check();
    cy.contains("Continue").click();
    cy.contains("Your Account Has Been Created!").should("be.visible");
  });

  it("20 symbols password", () => {
    cy.visit("/");
    cy.location("protocol").should("eq", "https:");
    const randomEmail = `testuser_${Math.random().toString(36).substring(2, 10)}@example.com`;

    cy.contains("My Account").click();
    cy.contains("Register").click();
    cy.get('input[name="firstname"]').type("Name");
    cy.get('input[name="lastname"]').type("last");
    cy.get('input[name="email"]').type(randomEmail);
    cy.get('input[name="password"]').type("12345qwertyujklzxcvb");
    cy.get('input[name="agree"]').check();
    cy.contains("Continue").click();
    cy.contains("Your Account Has Been Created!").should("be.visible");
  });
});