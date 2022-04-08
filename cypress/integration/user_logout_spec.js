describe("Logout", () => {
  it("allows a user to logout once they are logged in", () => {
    cy.eattheweek.signUp();
    cy.get("#logout").click();
    cy.url().should("eq", "http://localhost:3000/");
  });
});
