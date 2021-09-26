describe('My First Test', () => {
    it('Visit the kitchen Sink', () => {
        cy.visit('https://example.cypress.io')

        cy.contains('type').click()
    })
})