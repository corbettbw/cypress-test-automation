describe(`When the user visits the homepage`, () => {
  it(`displays default homepage`, () => {
    cy.visit(`https://sample-app-hartl-rails.herokuapp.com/`)

    cy.get(`[class="center jumbotron"]`)
    .then(() => {
      cy.get(`h1`)
        .should(`contain`, `Welcome to the Sample App`)
      cy.get(`h2`)
        .should(`contain`, `This is the home page for the`)
        .should(`contain`, `sample application.`)
    })
  })
})
