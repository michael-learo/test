describe('Test the cookies set by the training modal', function() {
  const account = 'sales-mlearo'
  const profile = 'another'

  it('Visits ecommerce', function() {
    cy.visit('www.tealiumecommerce.com/training?')
    cy.contains('Reset')
  })

  it('Adds my account', function() {
    cy.get('#tu-form-account')
      .type(account)
      .should('have.value', account)
  })
  it('Adds my profile', function() {
    cy.get('#tu-form-profile').type('another')
  })

  it('Clicks the Save changes button & checks cookies', function() {
    cy.get('#add_cookies').click()
    cy.wait(2000)

    cy.getCookie('account').then(obj => {
      const val = obj.value
      expect(val).to.be.equal(account)
    })

    cy.getCookie('profile').then(obj => {
      const val = obj.value
      expect(val).to.be.equal(profile)
    })
  })
})
