describe("Register", () => {
  it("A user signs up and is redirected to recipe page", () => {
    // sign up
    cy.eattheweek.signUp();
    cy.url().should("include", "/recipe");
  });
});