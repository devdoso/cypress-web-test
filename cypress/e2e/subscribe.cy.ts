describe("Newsletter Subscribe Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  context("subscribe section", () => {
    it("allow users to subscribe to the email list", () => {
      cy.getByData("email-input").type("tom@aol.com")
      cy.getByData("submit-button").click()
      cy.getByData("success-message").should("exist").contains("tom@aol.com")
    })

    it("does Not allow an invalid email address", () => {
      cy.getByData("email-input").type("tom")
      cy.getByData("submit-button").click()
      cy.getByData("success-message").should("not.exist")
    })
  })

})