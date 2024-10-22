describe("Add multiple products to your cart", () => {
  it("Add multiple products to your cart", () => {
    cy.viewport(1440, 900);
    cy.visit("https://demo.opencart.com/");
    cy.location("protocol").should("eq", "https:");

    cy.contains("My Account").click();
    cy.contains("Login").click();
    cy.get("#input-email").type("testh@example.com");
    cy.get("#input-password").type("1234");
    cy.get("#form-login > .text-end > .btn").click();
    cy.contains("My Account").should("be.visible");
    cy.wait(4000);
    cy.get("#logo > a > .img-fluid").click();
    cy.get(
      ':nth-child(1) > .product-thumb > .content > form > .button-group > [formaction="https://demo.opencart.com/en-gb?route=checkout/cart.add"]',
    ).click();
    cy.wait(2000);
    cy.get(
      ':nth-child(1) > .product-thumb > .content > form > .button-group > [formaction="https://demo.opencart.com/en-gb?route=checkout/cart.add"]',
    ).click();
    cy.wait(2000);
    cy.get(
      ':nth-child(1) > .product-thumb > .content > form > .button-group > [formaction="https://demo.opencart.com/en-gb?route=checkout/cart.add"]',
    ).click();
    cy.wait(2000);
    cy.get(
      ':nth-child(1) > .product-thumb > .content > form > .button-group > [formaction="https://demo.opencart.com/en-gb?route=checkout/cart.add"]',
    ).click();
    cy.wait(2000);
    cy.get(
      ':nth-child(1) > .product-thumb > .content > form > .button-group > [formaction="https://demo.opencart.com/en-gb?route=checkout/cart.add"]',
    ).click();
    cy.wait(2000);
    cy.get(
      ':nth-child(1) > .product-thumb > .content > form > .button-group > [formaction="https://demo.opencart.com/en-gb?route=checkout/cart.add"]',
    ).click();
    cy.wait(2000);
    cy.scrollTo("top");
    cy.contains(" 6 item(s) - $3,612.00").should("be.visible");
    cy.get(".dropdown > .btn-lg").click();
    cy.get(
      '[href="https://demo.opencart.com/en-gb?route=checkout/cart"] > strong',
    ).click();
    cy.contains("$3,612.00").should("be.visible");
    cy.get(".input-group > .btn-danger").click();
    cy.contains("Shopping Cart").should("be.visible");
  });
});
