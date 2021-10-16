describe('Home', () => {
  it('shows title', () => {
    cy.visit('http://localhost:8000/')
    cy.contains('This is the Home page')
  })
})
