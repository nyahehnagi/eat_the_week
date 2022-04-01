describe("Home page", () => {
  xit("has a title", () => {
    cy.visit("/");
    cy.get(".title").should("contain", "Eat The Week");
  });
});
