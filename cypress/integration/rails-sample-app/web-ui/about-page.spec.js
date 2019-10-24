describe(`When the user visits the About page`, () => {
  it(`displays the about page`, () => {
    cy.visit(`https://sample-app-hartl-rails.herokuapp.com/about`)

        cy.get('.navbar > .container')
          .should(`be.visible`)
        cy.get('h1')
          .should(`contain`, `About`)
        cy.get('p')
          .should(`contain`, `The Ruby on Rails Tutorial is a book and screencast series to teach web development with Ruby on Rails. This is the sample application for the tutorial.`)
  })
})
