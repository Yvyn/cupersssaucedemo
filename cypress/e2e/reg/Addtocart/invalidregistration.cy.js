describe("Valid Registration", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.location("protocol").should("eq", "https:");
  });

  function register() {
    cy.contains("My Account").click();
    cy.contains("Register").click();
  }

  it("Registratemail email with domain only", () => {
    register();
    cy.get('input[name="firstname"]').type("Name");
    cy.get('input[name="lastname"]').type("last");
    cy.get('input[name="email"]').type("@example.com");
    cy.get('input[name="password"]').type("1234");
    cy.get('input[name="agree"]').check();
    cy.contains("Continue").click();
  });

  it("email was registered", () => {
    register();
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

  it("Onli email name", () => {
    const randomEmail = `testuser_${Math.random().toString(36).substring(2, 10)}@example.com`;

    register();
    cy.get('input[name="firstname"]').type("Name");
    cy.get('input[name="lastname"]').type("last");
    cy.get('input[name="email"]').type("randomEmail");
    cy.get('input[name="password"]').type("1234");
    cy.get('input[name="agree"]').check();
    cy.contains("Continue").click();
    cy.contains("Register Account").should("be.visible");
  });

  it("Name 33", () => {
    const randomEmail = `testuser_${Math.random().toString(36).substring(2, 10)}@example.com`;

    register();
    cy.get('input[name="firstname"]').type("sdsddsdsdsddsdsdsdssdsddssffsdsdd");
    cy.get('input[name="lastname"]').type("last");
    cy.get('input[name="email"]').type(randomEmail);
    cy.get('input[name="password"]').type("1234");
    cy.get('input[name="agree"]').check();
    cy.contains("Continue").click();
    cy.contains("First Name must be between 1 and 32 characters!").should(
      "be.visible",
    );
  });

  it("Name 32", () => {
    const randomEmail = `testuser_${Math.random().toString(36).substring(2, 10)}@example.com`;

    register();
    cy.get('input[name="firstname"]').type("sdsddsdsdsddsdsdsdssdsddssffsdsd");
    cy.get('input[name="lastname"]').type("last");
    cy.get('input[name="email"]').type(randomEmail);
    cy.get('input[name="password"]').type("1234");
    cy.get('input[name="agree"]').check();
    cy.contains("Continue").click();
    cy.contains("Your Account Has Been Created!").should("be.visible");
  });

  it("21 symbols password", () => {
    const randomEmail = `testuser_${Math.random().toString(36).substring(2, 10)}@example.com`;

    register();
    cy.get('input[name="firstname"]').type("Name");
    cy.get('input[name="lastname"]').type("last");
    cy.get('input[name="email"]').type(randomEmail);
    cy.get('input[name="password"]').type("12345qwertyujklzxcvbn");
    cy.get('input[name="agree"]').check();
    cy.contains("Continue").click();
    cy.contains("Password must be between 4 and 20 characters!").should(
      "be.visible",
    );
  });
  it("3 symbols password", () => {
    const randomEmail = `testuser_${Math.random().toString(36).substring(2, 10)}@example.com`;

    register();
    cy.get('input[name="firstname"]').type("Name");
    cy.get('input[name="lastname"]').type("last");
    cy.get('input[name="email"]').type(randomEmail);
    cy.get('input[name="password"]').type("123");
    cy.get('input[name="agree"]').check();
    cy.contains("Continue").click();
    cy.contains("Password must be between 4 and 20 characters!").should(
      "be.visible",
    );
  });

  it("email without @.", () => {
    const randomEmail = `testuser_${Math.random().toString(36).substring(2, 10)}example.com`;

    register();
    cy.get('input[name="firstname"]').type("Name");
    cy.get('input[name="lastname"]').type("last");
    cy.get('input[name="email"]').type(randomEmail);
    cy.get('input[name="password"]').type("1234");
    cy.get('input[name="agree"]').check();
    cy.contains("Continue").click();
  });

  it("invalid Registration", () => {
    const randomEmail = `testuser_${Math.random().toString(36).substring(2, 10)}@example.com`;

    register();
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

  it("Privacy Policy eror ", () => {
    register();
    const randomEmail = `testuser_${Math.random().toString(36).substring(2, 10)}@example.com`;
    cy.get('input[name="password"]').type("1234");
    cy.contains("Continue").click();
    cy.contains("Warning: You must agree to the Privacy Policy!").should(
      "be.visible",
    );
  });
});
