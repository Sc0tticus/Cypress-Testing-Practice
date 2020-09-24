const { describe } = require("mocha")

describe("Google", () => {
  it("loads the page", () => {
    // 1. Open a browser
    // 2. Type in google.com
    cy.visit("https://www.google.com")
    // 3. Check that the name in the header shows up
    cy.get("#hplogo").should("exist")
    cy.contains("Google Search").should("have.text", "Google Search")
  })
})