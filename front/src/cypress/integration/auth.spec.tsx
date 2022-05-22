/// <reference types="cypress" />

const credentials = {
  username: "admin",
  password: "admin",
  email: "admin",
};

describe("User can register", () => {
  beforeEach(() => {
    cy.visit("/register");
  });

  it("should render register form", () => {
    cy.get("form").should("be.visible");

    cy.get('input[name="email"]')
      .type(credentials.email)
      .should("have.value", credentials.email)
      .get('input[name="username"]')
      .type(credentials.username)
      .should("have.value", credentials.username)
      .get('input[name="password"]')
      .type(credentials.password)
      .should("have.value", credentials.password);
    cy.get("form").submit();

    cy.wait(500);

    cy.get("span").should("be.visible").contains("Email already exists");
  });

  it("should redirect to login after click in login link", () => {
    cy.get("a").click();
    cy.location("pathname").should("include", "login");
  });
});

describe("Login route", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("should render login form", () => {
    cy.get("form").should("be.visible");
  });

  it("should redirect to login after click in login link", () => {
    cy.get("a").click();
    cy.location("pathname").should("include", "register");
    cy.go("back");
  });

  it("should login and redirect  to home page", () => {
    cy.get('input[name="email"]')
      .type(credentials.email)
      .should("have.value", credentials.email)
      .get('input[name="password"]')
      .type(credentials.password)
      .should("have.value", credentials.password);
    cy.get("form").submit();

    cy.wait(500);
    cy.location("pathname").should("include", "/");
  });
});
