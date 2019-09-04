describe('Validate item page spec defaults', () => {
  it('Visits ecommerce', function() {
    cy.visit('www.tealiumecommerce.com/plaid-cotton-shirt-589.html')
    cy.url().should(
      'equal',
      'http://www.tealiumecommerce.com/plaid-cotton-shirt-589.html'
    )
  })

  it('Validates color swatch is not selected by default', () => {
    cy.get('#configurable_swatch_color > li').each($el => {
      cy.wrap($el).should('not.have.class', 'selected')
    })
  })

  it('Validates no size is selected by default', () => {
    cy.get('#configurable_swatch_size > li').each($el => {
      cy.wrap($el).should('not.have.class', 'selected')
    })
  })

  it('Validate default quantity is 1', () => {
    cy.get('#qty').should('have.value', '1')
  })
})
