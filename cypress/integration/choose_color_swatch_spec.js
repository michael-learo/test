describe('Add item', () => {
  it('Visits mens pageecommerce', function() {
    cy.visit('www.tealiumecommerce.com/linen-blazer-599.html')
    cy.url().should(
      'equal',
      'http://www.tealiumecommerce.com/linen-blazer-599.html'
    )
  })

  it('Choose Color swatch', () => {
    cy.get('#option22').should('not.have.class', 'selected')
    cy.get('#swatch22').click()
  })

  it('Checks color swatch is selected', () => {
    cy.get('#option22').should('have.class', 'selected')
  })
})
