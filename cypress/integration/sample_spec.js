describe('My First Test', () => {
    it('Finds the content "type"', () => {
        cy.visit('https://example.cypress.io')

        cy.contains('type').click()
    })
})