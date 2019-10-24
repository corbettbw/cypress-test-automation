describe(`When the user visits the Help page`, () => {
  it(`displays the help page`, () => {
    cy.visit(`https://sample-app-hartl-rails.herokuapp.com/help`)

    cy.get('.navbar > .container')
      .should(`be.visible`)
    cy.get('h1')
      .should(`contain`, `Help`)
    cy.get('p')
      .should(`contain`, `Get help on the Ruby on Rails Tutorial at the Rails Tutorial help page.`)
  })
})
