describe('Home Page', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    context('Hero section', () => {
        it('load successfully', () => {
            cy.get('h1').contains('Next.js Application')
            cy.get('[data-test="hero-heading"]').contains('Next.js Application')
        })

        it('check courses feature', () => {
            cy.get('dt').eq(0).contains('4 Courses')
            cy.get('dt').eq(1).contains('25+ Lessons')
            cy.get('dt').eq(2).contains(/^Free.+Source$/)
        })
    })

    it('use custom command', () => {
        cy.getByDataAttr('hero-heading').contains('Next.js Application')
    })

    context('Courses section', () => {
        it('check first course', () => {
            cy.getByDataAttr('course-0').find('a').contains('Get started')
                .click()
            cy.location('pathname').should('equal', '/testing-your-first-application')
        })

        it('check second course', () => {
            cy.getByDataAttr('course-1').find('a').contains('Get started')
                .click()
            cy.location('pathname').should('equal', '/testing-foundations')
        })
        it('check third course', () => {
            cy.getByDataAttr('course-2').find('a').contains('Get started')
                .click()
            cy.location('pathname').should('equal', '/cypress-fundamentals')

        })
    })
})