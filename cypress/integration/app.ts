describe("App", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should show page header", () => {
    cy.get(".center").contains("Pokemon GraphQL Server");
    cy.get(".sub").contains(
      "Simple GraphQL stack for connecting to the Pokemon REST API"
    );
  });
});
