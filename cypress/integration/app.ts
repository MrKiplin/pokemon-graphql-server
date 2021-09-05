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

  it("Should show warning message for no name or id given", () => {
    cy.get(".primary").click();
    cy.get(".warning").contains("Pokemon Name or ID is required");
  });

  it("Should show warning message for special characters", () => {
    cy.get("input").type("!");
    cy.get(".primary").click();
    cy.get(".warning").contains(
      "Pokemon Name or ID must be letters or numbers"
    );
  });

  it("Should show error message for invalid input", () => {
    cy.get("input").type("invalid-pokemon");
    cy.get(".primary").click();
    cy.get(".negative").contains("Pokemon cannot be found: invalid-pokemon");
  });

  it("Should show pokemon info correctly", () => {
    cy.get("input").type("charizard");
    cy.get(".primary").click();
    cy.get(".positive").contains("Pokemon info successfully retrieved");
    cy.get("[data-test=pokemon-table]").contains("charizard");
  });
});
