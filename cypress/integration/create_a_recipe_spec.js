describe("Create a Recipe", () => {
  it("creates a recipe", () => {
    // sign up
    cy.visit("/recipe/new");
    cy.get("#name").type("bacon and eggs");
    cy.get("#create-recipe").click();
    cy.get("#recipeList").eq(0).should("contain_text", "bacon and eggs");
  });
});
