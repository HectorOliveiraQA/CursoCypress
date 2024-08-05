describe('Login', () => {
  it('successfully logs in', () => {
    cy.intercept('GET', '**/notes').as('getNotes')

    cy.visit('https://nextdev.afinandoocerebro.com.br/?addlogin=true')

  })
})
