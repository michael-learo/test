describe('My first test', function() {
  it('Visits howto.tealiumdemo.com', function() {
    cy.visit('http://howto.tealiumdemo.com')
  })

  it('Checks default value in Username', function() {
    cy.get('#username').should('have.attr', 'placeholder', 'Username')
  })
  it('Checks default value in Email', function() {
    cy.get('#email').should('have.attr', 'placeholder', 'you@example.com')
  })
  it('Checks default value in Address', function() {
    cy.get('#address').should('have.attr', 'placeholder', '1234 Main St')
  })
  it.only('Checks default option is Credit Card', function() {
    cy.get('#credit').should('have.attr', 'checked')
  })
})
