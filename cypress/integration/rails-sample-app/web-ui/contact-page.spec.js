describe(`When the user visits the Contact page`, () => {
  it(`displays the Contact page`, () => {
    cy.visit(`https://sample-app-hartl-rails.herokuapp.com/contact`)

        cy.get('.navbar > .container')
          .should(`be.visible`)
        cy.get('h1')
          .should(`contain`, `Contact`)
        cy.get('p')
          .should(`contain`, `Contact the Ruby on Rails Tutorial about the sample app at the contact page.`)
  })
})
