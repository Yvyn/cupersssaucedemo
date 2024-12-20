describe("add to card", () => {
  let userData;

  beforeEach(() => {
    cy.fixture("example").then((data) => {
      userData = data;
    });
    cy.visit("/");
    cy.location("protocol").should("eq", "https:");
  });

  function login() {
    cy.contains("My Account").click();
    cy.contains("Login").click();
    cy.get("#input-email").type(userData.email);
    cy.get("#input-password").type(userData.password);
    cy.get("#form-login > .text-end > .btn").click();
    cy.contains("My Account").should("be.visible");
  }

  it("Add multiple products to your cart", () => {
    cy.wait(4000);
    cy.get("#logo > a > .img-fluid").click();
    cy.get(
      ':nth-child(1) > .product-thumb > .content > form > .button-group > [formaction="https://demo.opencart.com/en-gb?route=checkout/cart.add"]',
    ).click();
    cy.wait(2000);
    cy.scrollTo("top");
    cy.contains(" 1 item(s) - $602.00").should("be.visible");
    cy.get(".dropdown > .btn-lg").click();
    cy.get(
      '[href="https://demo.opencart.com/en-gb?route=checkout/cart"] > strong',
    ).click();
    cy.contains("$602.00").should("be.visible");
    cy.get(".input-group > .btn-danger").click();
  });

  it("Add to cart via comparison ", () => {
    login();
    cy.wait(4000);
    cy.get("#logo > a > .img-fluid").click();
    cy.scrollTo("bottom");
    cy.get(
      ':nth-child(1) > .product-thumb > .content > form > .button-group > [formaction="https://demo.opencart.com/en-gb?route=product/compare.add"] > .fa-solid',
    ).click();
    cy.get(
      ':nth-child(2) > .product-thumb > .content > form > .button-group > [formaction="https://demo.opencart.com/en-gb?route=product/compare.add"]',
    ).click();
    cy.get(
      '[href="https://demo.opencart.com/en-gb?route=product/compare"]',
    ).click();
    cy.wait(4000);
    cy.get(":nth-child(2) > form > #button-confirm").click();
    cy.wait(4000);
    cy.get(".dropdown > .btn-lg").click();

    cy.get(
      '[href="https://demo.opencart.com/en-gb?route=checkout/cart"] > strong',
    ).click();
    cy.contains("$602.00").should("be.visible");
    cy.get(".input-group > .btn-danger").click();
  });

  it("Add multiple products to your cart", () => {
    login();
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

  it("Add to cart via search ", () => {
    login();
    cy.wait(10000);
    cy.get("#wishlist-total > .d-none").scrollIntoView().click();
    cy.get(".form-control").type("mac").type("{enter}");
    cy.get(
      ":nth-child(1) > .product-thumb > .content > .description > h4 > a",
    ).click();
    cy.get("#button-cart").click();
    cy.get(".dropdown > .btn-lg").click();
    cy.wait(5000);
    cy.get(".dropdown > .btn-lg").click();
    cy.get(
      '[href="https://demo.opencart.com/en-gb?route=checkout/cart"] > strong',
    ).click({ timeout: 3000 });
    cy.contains("$122.00").should("be.visible");
    cy.get(".input-group > .btn-danger").click();
    cy.contains("Shopping Cart").should("be.visible");
  });

  it("Add to cart user is not registered", () => {
    cy.get(
      ':nth-child(1) > .product-thumb > .content > form > .button-group > [formaction="https://demo.opencart.com/en-gb?route=checkout/cart.add"]',
    ).click();
    cy.scrollTo("top");
    cy.contains(" 1 item(s) - $602.00").should("be.visible");
    cy.wait(10000);
    cy.get(".dropdown > .btn-lg").click();
    cy.get(
      '[href="https://demo.opencart.com/en-gb?route=checkout/cart"] > strong',
    ).click({ timeout: 10000 });
    cy.contains("$602.00").should("be.visible");
    cy.get(".input-group > .btn-danger").click();
    cy.contains("Shopping Cart").should("be.visible");
  });
});
