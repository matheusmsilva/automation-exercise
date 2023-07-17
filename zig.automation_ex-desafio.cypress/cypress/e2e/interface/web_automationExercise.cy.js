/// <reference types="cypress" />

describe('Usuários', () => {
  // variável visível em todo o contexto para armazenar a massa de dados
  let dados
  // ação para gerar massa de dados dinâmica para cadastro de novos usuários antes de qualquer execução
  before(() => {
    cy.gerarFixtureDadosCadastrais()
    cy.fixture('dados_cadastrais_dinamicos.json').then(arquivo => {
      // os dados gerados serão armazenados na variável definida
      dados = arquivo
    })
  })

  // gancho para atender pré requisito de cada caso de teste antes de executá-lo
  beforeEach(() => {
    cy.web_acessarPaginaPrincipal()
  })

  it('Criar uma conta no site automationexercise', () => {
    cy.web_acessarPaginaDeLogin()
    cy.web_cadastrarUsuario(
      dados.web.nome,
      dados.web.sobrenome,
      dados.web.email,
      dados.web.senha,
      dados.web.endereco,
      dados.web.pais,
      dados.web.estado,
      dados.web.cidade,
      dados.web.cep,
      dados.web.telefone
    )
    cy.web_validarCriacaoUsuario()
  })

  it('Realizar o login no site automationexercise', () => {
    // cadastro de novo usuário via api para tornar teste independente e performático
    cy.api_cadastrarUsuario(dados.api)
    cy.web_acessarPaginaDeLogin()
    cy.web_realizarLogin(
      dados.api.email,
      dados.api.name,
      dados.api.password
    )
    // remoção de cadastro via api para não manchar base de dados e manter teste performático
    cy.api_excluirUsuario(
      dados.api.email,
      dados.api.password
    )
  })

  it('Realizar a exclusão da conta no site automationexercise', () => {
    // cadastro de novo usuário via api para tornar teste independente e performático
    cy.api_cadastrarUsuario(dados.api)
    cy.web_acessarPaginaDeLogin()
    cy.web_realizarLogin(
      dados.api.email,
      dados.api.name,
      dados.api.password
    )
    cy.web_deletarUsuario()
    cy.web_validarDelecaoUsuario()
  })
})