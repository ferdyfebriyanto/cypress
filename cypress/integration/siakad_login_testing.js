describe('Login Page Siakad', () => {
    it('Skenario Login', () => {
        cy.visit('http://siakad.polinema.ac.id')

        cy.get('.login')
        cy.get('#username').type('')
        cy.get('#password').type('')
        cy.contains('Login').click()
        cy.url().should('include', '/beranda')
    })
})