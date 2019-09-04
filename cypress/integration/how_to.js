describe('My first test', function() {
  it('Visits howto.tealiumdemo.com', function() {
    cy.visit('http://howto.tealiumdemo.com')
  })

  it('Types first name', function() {
    cy.get('#firstName')
      .type('Michael')
      .should('have.value', 'Michael')
  })
  it('Types last name', function() {
    cy.get('#lastName')
      .type('Learo')
      .should('have.value', 'Learo')
  })
  it('Checks the Shipping address is the same check box', function() {
    cy.get('#same-address')
      .check({ force: true })
      .should('be.checked')
  })

  it('Selects Colorado', function() {
    cy.get('#state')
      .select('Colorado')
      .should('have.value', 'CO')
  })
})
