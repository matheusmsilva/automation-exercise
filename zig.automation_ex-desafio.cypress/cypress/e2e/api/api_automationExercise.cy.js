/// <reference types="cypress" />

describe('Usuários', () => {
  // variável visível em todo o contexto para armazenar a massa de dados
  let dados
  // ação para gerar massa de dados dinâmica para cadastro de novos usuários antes de qualquer execução
  before(() => {
    cy.gerarFixtureDadosCadastrais()
    cy.fixture('dados_cadastrais_dinamicos.json').then(arquivo => {
      // os dados gerados serão armazenados na variável definida
      dados = arquivo.api
    })
  })

  it('Criar uma conta no site automationexercise via API', () => {
    cy.api_cadastrarUsuario(dados)
  })
  
  // dependência necessária do teste anterior, caso contrário haverá redundância de testes
  it('Realizar a exclusão da conta no site automationexercise via API', () => {
    cy.api_excluirUsuario(
      dados.email,
      dados.password
    )
  })

})