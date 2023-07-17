Cypress.Commands.add('web_acessarPaginaPrincipal', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('section[id=slider]')
        .should('be.visible')
})

Cypress.Commands.add('web_acessarPaginaDeLogin', () => {
    cy.get('a[href="/login"]').click()
    cy.contains('h2', 'New User Signup!')
        .should('be.visible')
    cy.contains('h2', 'Login to your account')
        .should('be.visible')
})

Cypress.Commands.add('web_validarCriacaoUsuario', () => {
    cy.contains('h2', 'Account Created!')
    cy.contains('p', 'Congratulations! Your new account has been successfully created!')
        .should('be.visible')
    cy.contains('p', 'You can now take advantage of member privileges to enhance your online shopping experience with us.')
        .should('be.visible')
})

Cypress.Commands.add('web_cadastrarUsuario', (nome, sobrenome, email, senha, endereco, pais, estado, cidade, cep, telefone) => {
    cy.get('input[data-qa="signup-name"]').type(nome)
    cy.get('input[data-qa="signup-email"]').type(email)
    cy.get('button[data-qa="signup-button"]').click()
    cy.contains('h2', 'Enter Account Information')
        .should('be.visible')
    cy.get('input[data-qa="password"]').type(senha)
    cy.get('input[data-qa="first_name"]').type(nome)
    cy.get('input[data-qa="last_name"]').type(sobrenome)
    cy.get('input[data-qa="address"]').type(endereco)
    cy.get('select[data-qa="country"]').select(pais)
    cy.get('input[data-qa="state"]').type(estado)
    cy.get('input[data-qa="city"]').type(cidade)
    cy.get('input[data-qa="zipcode"]').type(cep)
    cy.get('input[data-qa="mobile_number"]').type(telefone)
    cy.get('button[data-qa="create-account"]').click()
})

Cypress.Commands.add('web_realizarLogin', (email, nome, senha) => {
    cy.get('input[data-qa="login-email"]').type(email)
    cy.get('input[data-qa="login-password"]').type(senha)
    cy.get('button[data-qa="login-button"]').click()
    cy.contains('li', `Logged in as ${nome}`)
        .should('be.visible')
})

Cypress.Commands.add('web_deletarUsuario', () => {
    cy.contains('a', 'Delete Account').click()
})

Cypress.Commands.add('web_validarDelecaoUsuario', () => {
    cy.contains('h2', 'Account Deleted!')
        .should('be.visible')
    cy.contains('p', 'Your account has been permanently deleted!')
        .should('be.visible')
    cy.contains('p', 'You can create new account to take advantage of member privileges to enhance your online shopping experience with us.')
        .should('be.visible')
})