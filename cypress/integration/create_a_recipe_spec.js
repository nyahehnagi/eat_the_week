describe("Create a Recipe", () => {

  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  })
  it("creates a recipe", () => {
    cy.eattheweek.signUp();
    cy.visit("/recipe/create");
    cy.get("#name").type("bacon and eggs");
    cy.get("#create-recipe").click();
    cy.get("#recipeList").contains("bacon and eggs");
  });
});
