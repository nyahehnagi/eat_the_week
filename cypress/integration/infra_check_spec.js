describe("Home page", () => {
  it("has a title", () => {
    cy.visit("/");
    cy.get("h3").should("contain", "Eat The Week");
  });
});
