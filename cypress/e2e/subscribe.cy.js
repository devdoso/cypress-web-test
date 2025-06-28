describe('Subscribe Form', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('subscribe to the email list', () => {
        cy.getByDataAttr('email-input').type('test@aol.com')
        cy.getByDataAttr('submit-button').click()
        cy.getByDataAttr('success-message').should('exist').contains('test@aol.com')
    })

    it('does not allow invalid email', () => {
        cy.getByDataAttr('email-input').type('tom')
        cy.getByDataAttr('submit-button').click()
        cy.getByDataAttr('success-message').should('not.exist')
    })

    it('does not allow duplicated email', () => {
        cy.getByDataAttr('email-input').type('john@example.com')
        cy.getByDataAttr('submit-button').click()
        cy.getByDataAttr('server-error-message').should('exist')
            .contains('already exists')
    })
})