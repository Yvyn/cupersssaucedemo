describe("Add to cart via comparison ", () => {
  it("Add to cart via comparison ", () => {
    cy.visit("/");
    cy.location("protocol").should("eq", "https:");

    cy.contains("My Account").click();
    cy.contains("Login").click();
    cy.get("#input-email").type("testh@example.com");
    cy.get("#input-password").type("1234");
    cy.get("#form-login > .text-end > .btn").click();
    cy.contains("My Account").should("be.visible");
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
});
