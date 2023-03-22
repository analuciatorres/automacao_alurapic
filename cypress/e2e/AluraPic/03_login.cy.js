import 'cypress-mochawesome-reporter/register';

describe('Login de usuarios alurapic', () => {

    beforeEach(() => {
      cy.visit('/')
    //  Teste de Stub
    //   cy.intercept('POST', 'https://apialurapic.herokuapp.com/user/login',{
    //     statusCode: 400
    //   }).as('stubPost')

     })

     it('verifica login de usuário válido', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        // cy.wait('@stubPost');
        cy.contains('a', Cypress.env('userName')).should('be.visible')
    })

    it('verifica login de usuário senha inválida', () => {
        cy.login(Cypress.env('userName'), 'abc');
        cy.on('window:alert', (str) =>{
            expect(str).to.equal('Invalid user name or password');
        });
    })

    it('verifica login de usuário  inválido', () => {
        cy.login('abc', Cypress.env('password'));
        cy.on('window:alert', (str) =>{
            expect(str).to.equal('Invalid user name or password');
        });
    })

})