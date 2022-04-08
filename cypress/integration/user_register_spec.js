describe("Register", () => {
  it("allows a user signs up and is redirected to recipe page", () => {
    cy.eattheweek.signUp();
    cy.url().should("include", "/recipe");
  });
});
