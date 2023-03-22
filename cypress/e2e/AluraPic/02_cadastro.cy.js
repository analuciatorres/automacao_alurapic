import 'cypress-mochawesome-reporter/register';

describe('Cadastros de usuarios alurapic', () => {

    beforeEach(() => {
      cy.visit('/')

     })

     it('verifica mensagens validacao', () => {
        cy.contains('a','Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');

    })

    it('verifica mensagens email inválido', () => {
        cy.contains('a','Register now').click();
        cy.get('input[formcontrolname="email"]').type('ana');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    })

    it('verifica mensagens fullName com menos de 2 caracteres', () => {
        cy.contains('a','Register now').click();
        cy.get('input[formcontrolname="fullName"]').type('j');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
    })

    it('verifica mensagens userName muito com menos de 2 caracteres', () => {
        cy.contains('a','Register now').click();
        cy.get('input[formcontrolname="userName"]').type('j');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
    })

    it('verifica mensagens userName escrito com letra maiúscula', () => {
        cy.contains('a','Register now').click();
        cy.get('input[formcontrolname="userName"]').type('Ana');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
    })

    it('verifica mensagens Password com menos de 8 caracteres', () => {
        cy.contains('a','Register now').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    })

    const usuarios = require('../../fixtures/usuarios.json');
    usuarios.forEach(usuario => {

    it(`verifica registro de ${usuario.userName} válido`, () => {
        cy.contains('a','Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type(usuario.email);
        cy.get('input[formcontrolname="fullName"]').type(usuario.fullName);
        cy.get('input[formcontrolname="userName"]').type(usuario.userName);
        cy.get('input[formcontrolname="password"]').type(usuario.password);
        cy.contains('button', 'Register').click();
        })
        
    });

})