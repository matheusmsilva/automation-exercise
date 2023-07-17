# Documento de diretrizes e boas práticas

1. Padronização na identificação dos arquivos
    a. Para as suites de teste, é necessário informar o tipo de teste que será realizado seguido do nome do alvo do teste, seguindo o modelo camelCase. Exemplo:
        **api_suiteExemplo.cy.js**
    
    b. Arquivos contendo massa de dados na estrutura json devem seguir o modelo snake_case. Exemplo:
        **dados_para_teste.json**

    c. Escreva nomes breves e descritivos para fácil identificação.

2. Nomenclatura de Custom Commands
    a. Caso o comando personalizado seja exclusivamente para um tipo de teste, comece identificando-o. Para comandos que serão utilizados em mais de um contexto de teste, não é necessário que haja essa especificação. Os nomes devem seguir o padrão camelCase. Exemplos:
    - Comando exclusivo para APIs: **api_testeApi()**
    - Comando não exclusivo: **gerarMassaDeDados()**

3. Evite elaborar códigos com duplicidade 
    a. Para facilitar a manutenção, utilize as ferramentas do Cypress, como as Custom Commands, para tornar o seu código reutilizável e com fácil entendimento.

4. Mantenha seus testes independentes
    a. Todo teste automatizado deve ser independente, ou seja, o sucesso de um teste não pode estar condidicionado ao sucesso de um teste anterior.

5. Mantenha a organização de diretórios
    a. Separe as suites de testes automatizados por categoria de pastas referente ao tipo de teste que está sendo realizado.

    b. Relacione os arquivos com as Custom Commands dentro das pastas referentes ao tipo de teste que ela atenderá.

6. Organização da massa de dados
    a. Utilize arquivos json para elaboração da massa de dados e torne visível ao que se refere aquela massa e para quais tipos de teste ela será utilizada.