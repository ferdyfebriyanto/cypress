describe('My First Test', () => {
    it('Gets, type and asserts', () => {
        cy.visit('https://example.cypress.io') // untuk mengunjungi url

        cy.contains('type').click() // contains() untuk mencari elemen, sedangkan click() untuk perintah tindakan

        // Should be on a new URL which includes '/commands/actions'
        cy.url().should('include', '/commands/actions') // untuk memverifikasi url baru

        // Get an input, type into it and verify that the value has been updated
        cy.get('.action-email') //cy.get() : untuk memilih elemen berdasarkan kelas CSS
            .type('fake@email.com') //.type() : untuk memasukkan teks ke dalam inputan yang dipilih
            .should('have.value', 'fake@email.com') //.should : untuk memverifikasi bahwa nilai input mencerminkan teks yang diketik
    })
})