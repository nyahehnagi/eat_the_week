cy.eattheweek = { 
  signUp: () => {
    // sign up
    cy.visit('/');
    cy.get('#email').type('someone@example.com');
    cy.wait(200);
    cy.get('#password').type('Passw0rd!');
    cy.wait(200);
    cy.get('#name').type('Test');
    cy.wait(200);
    cy.get('#create-user').click();
  }
};

