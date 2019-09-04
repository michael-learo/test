describe('My first test', function() {
  /*
	var menu_href = []

	it("Capture all href's in menu",() => {
		cy.visit('/')
		cy.get('#nav > .nav-primary > li > a')
			.each(($el) => {
				menu_href.push($el[0])
			})
	})
	*/

  beforeEach(() => {
    cy.visit('/')
  })

  it('Test Women menu item', () => {
    cy.get('.nav-1')
      .children('a')
      .click()
    cy.url().should('equal', 'http://www.tealiumecommerce.com/women.html')
  })

  it('Test Men menu item', () => {
    cy.get('.nav-2')
      .children('a')
      .click()
    cy.url().should('equal', 'http://www.tealiumecommerce.com/men.html')
  })

  it('Test Accessories menu item', () => {
    cy.get('.nav-3')
      .children('a')
      .click()
    cy.url().should('equal', 'http://www.tealiumecommerce.com/accessories.html')
  })

  it('Test Home & Decor menu item', () => {
    cy.get('.nav-4')
      .children('a')
      .click()
    cy.url().should('equal', 'http://www.tealiumecommerce.com/home-decor.html')
  })

  it('Test Sale menu item', () => {
    cy.get('.nav-5')
      .children('a')
      .click()
    cy.url().should('equal', 'http://www.tealiumecommerce.com/sale.html')
  })

  it('Test VIP menu item', () => {
    cy.get('.nav-6')
      .children('a')
      .click()
    cy.url().should('equal', 'http://www.tealiumecommerce.com/vip.html')
  })
})
