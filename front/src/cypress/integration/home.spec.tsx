/// <reference types="cypress" />

const routes = ["login", "register"];

describe("Check home page", () => {
  it("Check if all links are valid", () => {
    cy.visit("/");

    routes.forEach((route) => {
      cy.contains(route).click();
      cy.location("pathname").should("include", route);
      cy.go("back");
    });
  });

  it("should have lang switcher button", () => {
    cy.visit("/");
    cy.contains("en");
    cy.contains("pl");
  });
});
