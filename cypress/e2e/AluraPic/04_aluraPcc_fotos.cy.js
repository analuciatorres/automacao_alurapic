describe('Validações alurapic fotos', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.login(Cypress.env('userName'), Cypress.env('password'));
       })
  
        it('verifica header alurapic', () => {
          cy.get('.navbar-brand').should('be.visible');
          cy.contains('a', Cypress.env('userName')).should('be.visible');
        })
  
        it('verifica campo de busca de fotos', () => {
            cy.get('i[class="fa fa-search mr-1"]').should('be.visible');
            cy.get('input[placeholder="search..."]').type('Visão pela janela');
            cy.get('img[alt="Visão pela janela"]').should('be.visible');
        })

        it.only('verifica botão home', () => {
            cy.get('i[class="fa fa-search mr-1"]').should('be.visible');
            cy.get('input[placeholder="search..."]').type('Visão pela janela');
            cy.get('img[alt="Visão pela janela"]').should('be.visible');
            cy.get('i[class="fa fa-home fa-2x"]').click();
            cy.url(`/ ${Cypress.env('userName')}`)
            cy.contains('a', Cypress.env('userName')).should('be.visible');
        })
})