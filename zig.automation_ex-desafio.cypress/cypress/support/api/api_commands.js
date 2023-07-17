// Custom command para validar propriedades obtidas da requisição 
Cypress.Commands.add('api_validarResposta', (response, status, mensagem) => {
        const json = JSON.parse(response)
        expect(json).to.have.property('responseCode', status)
        expect(json).to.have.property('message', mensagem)
})

// Custom command para realizar cadastro de um novo usuário através de um formdata
Cypress.Commands.add('api_cadastrarUsuario', (dados) => {
    cy.request({
        method: 'POST',
        url: '/createAccount',
        headers: { 'Content-Type': 'multipart/form-data' },
        body: dados,
        form: true
    }).then(response => {
        cy.api_validarResposta(response.body, 201, 'User created!')
    })
})

// Custom command para excluir um usuário via api através do email e senha
Cypress.Commands.add('api_excluirUsuario', (email, senha) => {
    cy.request({
        method: 'DELETE',
        url: '/deleteAccount',
        headers: { 'Content-Type': 'multipart/form-data' },
        body: { email: email, password: senha },
        form: true
    }).then(response => {
        cy.api_validarResposta(response.body, 200, 'Account deleted!')
    })
})