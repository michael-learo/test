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
    cy.get('#option22').should('have.class', 'selected')
  })

  it('Choose Size Medium', () => {
    cy.get('#option79').should('not.have.class', 'selected')
    cy.get('#swatch79').click()
    cy.get('#option79').should('have.class', 'selected')
  })

  it('Validate quantity', () => {
    cy.get('#qty').should('have.value', '1')
  })

  it('Clicks "ADD TO CART" button', () => {
    cy.get('.add-to-cart-buttons > .button.btn-cart').click()
  })

  //it('Checks URL', () => {
  //	cy.url().should('equal', 'http://www.tealiumecommerce.com/checkout/cart/')
  //})
})
