cy.eattheweek = {
  signUp: () => {
    cy.visit("/auth/register");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("Passw0rd!");
    cy.get("#name").type("Test");
    cy.get("#create-user").click();
  },
  signIn: () => {
    cy.visit("/auth");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("Passw0rd!");
    cy.get("#logon").click();
  },
};
