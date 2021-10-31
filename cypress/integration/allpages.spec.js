describe('All pages', () => {
  it('Home', () => {
    cy.visit('http://localhost:8000/')
    cy.contains('Empresa')
  })

  it('Empresa', () => {
    cy.visit('http://localhost:8000/empresa')
    cy.contains('Fundada em')
  })

  it('Empresa', () => {
    cy.visit('http://localhost:8000/recrutamento')
    cy.contains('Bolsa de Emprego')
  })

  it('Blog', () => {
    cy.visit('http://localhost:8000/blog')
    cy.contains('saber mais')
  })

  it('Contactos', () => {
    cy.visit('http://localhost:8000/contactos')
    cy.contains('Zona Industrial')
  })
})
