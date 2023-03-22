

Cypress.Commands.add('login', (nome, senha) =>{
    cy.get('input[formcontrolname="userName"]').type(nome);
    cy.get('input[formcontrolname="password"]').type(senha, {log:false});
    cy.contains('button', 'login').click();
})

Cypress.Commands.add('registro', (email, fullName, userName, passowrd) =>{
    cy.contains('a','Register now').click();
    cy.contains('button', 'Register').click();
    cy.get('input[formcontrolname="email"]').type(email);
    cy.get('input[formcontrolname="fullName"]').type(fullName);
    cy.get('input[formcontrolname="userName"]').type(userName);
    cy.get('input[formcontrolname="password"]').type(passowrd);
    cy.contains('button', 'Register').click();
})