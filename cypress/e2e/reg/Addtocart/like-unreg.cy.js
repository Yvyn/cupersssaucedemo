describe("like user is not registered ", () => {
  it("like user is not registered ", () => {
    cy.visit("/");
    cy.location("protocol").should("eq", "https:");
    cy.get(
      ':nth-child(2) > .product-thumb > .content > form > .button-group > [formaction="https://demo.opencart.com/en-gb?route=account/wishlist.add"]',
    ).click();
    cy.contains(
      "You must login or create an account to save iPhone to your wish list!",
    ).should("be.visible");
  });
});
