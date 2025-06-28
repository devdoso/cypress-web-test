describe('User Journey', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('start learning lessons', () => {
        cy.getByDataAttr('course-0').find('a').contains('Get started')
            .click()
        cy.location('pathname').should('exist', '/testing-your-first-application')
        cy.getByDataAttr('next-lesson-button').click()
        cy.location('pathname').should('equal', '/testing-your-first-application/app-install-and-overview')

        cy.getByDataAttr('challenge-answer-0').click()
        cy.getByDataAttr('next-lesson-button').should('exist').click()
        cy.location('pathname').should('equal', '/testing-your-first-application/installing-cypress-and-writing-our-first-test')

        cy.getByDataAttr('challenge-answer-0').click()
        cy.getByDataAttr('next-lesson-button').should('exist').click()
        cy.location('pathname').should('equal', '/testing-your-first-application/setting-up-data-before-each-test')

        cy.getByDataAttr('challenge-answer-0').click()
        cy.getByDataAttr('next-lesson-button').should('exist').contains('Complete Course')
            .click()
        cy.location('pathname').should('equal', '/')
    })
})