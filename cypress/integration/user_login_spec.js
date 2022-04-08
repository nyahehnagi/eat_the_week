describe("Login", () => {
  it("allows a user completes login and is redirected to recipe page", () => {
    cy.eattheweek.signUp();
    cy.get("#logout").click();
    cy.eattheweek.signIn();
    cy.url().should("include", "/recipe");
  });
});
