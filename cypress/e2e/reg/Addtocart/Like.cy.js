describe("Like functionality", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.location("protocol").should("eq", "https:");
  });

  function login() {
    cy.contains("My Account").click();
    cy.contains("Login").click();
    cy.get("#input-email").type("testh@example.com");
    cy.get("#input-password").type("1234");
    cy.get("#form-login > .text-end > .btn").click();
    cy.contains("My Account").should("be.visible");
  }

  it("like when user is not registered", () => {
    cy.get(
      ':nth-child(2) > .product-thumb > .content > form > .button-group > [formaction="https://demo.opencart.com/en-gb?route=account/wishlist.add"]',
    ).click();
    cy.contains(
      "You must login or create an account to save iPhone to your wish list!",
    ).should("be.visible");
  });

  it("like when user is registered", () => {
    login();
    cy.wait(10000);
    cy.get("#logo > a > .img-fluid").should("be.visible").click();
    cy.contains("Featured").should("be.visible");
    cy.get(
      ':nth-child(2) > .product-thumb > .content > form > .button-group > [formaction="https://demo.opencart.com/en-gb?route=account/wishlist.add"]',
    ).click();
    cy.contains("Wish List (1)").should("be.visible");
    cy.get("#wishlist-total > .d-none").scrollIntoView().click();
    cy.get(".btn-danger").click();
  });
});
