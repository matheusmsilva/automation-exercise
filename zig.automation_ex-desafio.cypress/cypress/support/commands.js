const { faker } = require('@faker-js/faker')

// Comando geral para criação de massa de dados que servirá como base para cadastro de usuários via API e GUI
Cypress.Commands.add('gerarFixtureDadosCadastrais', () => {
    // paises disponibilizados pelo site
    const paises = [
        'India',
        'United States',
        'Canada',
        'Australia',
        'Israel',
        'New Zealand',
        'Singapore'
    ];
    // Gerar um índice aleatório com base no tamanho da lista de países
    const indiceAleatorio = Math.floor(Math.random() * paises.length)
    // Obter o país correspondente ao índice aleatório
    const paisAleatorio = paises[indiceAleatorio]

    cy.writeFile('cypress/fixtures/dados_cadastrais_dinamicos.json', {
        'web':{
            'nome': `${faker.person.firstName()}`,
            'sobrenome': `${faker.person.lastName()}`,
            'email': `${faker.string.alphanumeric(6)}@email.com`,
            'senha': `${faker.string.alphanumeric(6)}`,
            'endereco': `${faker.location.streetAddress(false)}`,
            'pais': `${paisAleatorio}`,
            'estado': `${faker.location.state()}`,
            'cidade': `${faker.location.city()}`,
            'cep': `${faker.location.zipCode()}`,
            'telefone': `${faker.string.numeric(8)}`
        },
        'api': {
            'name': `${faker.person.firstName()}`,
            'firstname': `${faker.person.firstName()}`,
            'lastname': `${faker.person.lastName()}`,
            'email': `${faker.string.alphanumeric(6)}@email.com`,
            'password': `${faker.string.alphanumeric(6)}`,
            'address1': `${faker.location.streetAddress(false)}`,
            'country': `${paisAleatorio}`,
            'state': `${faker.location.state()}`,
            'city': `${faker.location.city()}`,
            'zipcode': `${faker.location.zipCode()}`,
            'mobile_number': `${faker.string.numeric(8)}`
        }
    })
})