# Projeto de Automação de Testes om Cypress para o site Automation Exercise

O objetivo deste projeto é automatizar testes API e GUI (Graphical User Interface) de uma aplicação web para garantir a qualidade do software.

1. Configuração do ambiente e execução
    a. Requisitos
        - Node.js
        - Yarn (Gerenciador de pacotes do Node.js) 

    b. Configuração do ambiente
        No prompt de comando, navegue até o diretório do projeto e execute o comando **yarn** para instalar as dependências necessárias.

2. Execução dos testes
    Para executar os testes, execute o comando **yarn cypress run** dentro do terminal.

3. Estrutura do projeto
    - Por se tratar de um projeto enxuto, o padrão de desenvolvimento utilizado segue as diretrizes do modelo Custom Commands. Caso contrário, o modelo Page Objects se encaixaria com melhor aderência.
    
    a. O diretório **cypress/e2e** contém subpastas com tipos de testes que serão realizados, sendo eles: API e interface. Cada subpasta contém as suites de testes com a sua respectiva identificação.
    Na subpasta **api**, contém a suite que armazena os casos de testes da API do site Automation Exercise. Ela é responsável por controlar quais casos de testes serão executados e em qual sequência.
    Na subpasta **interface**, contém a suite que armazena os casos de testes na GUI do site. Seguindo a mesma lógica de responsabilidade da suite de API.

    b. O diretório **cypress/fixtures** contém arquivos de dados de teste. Esses dados são gerados de maneira dinâmica com o uso da biblioteca FakerJs e armazenados em arquivo JSON para realizar cadastro de usuários, tanto via API, como via interface.

    c. O diretório **cypress/support** contém arquivos de suporte, como comandos personalizados para serem utilizados nos testes.
    A organização dos comandos segue a mesma lógica da organização das suites. Existem duas subpastas com cada tipo de teste e dentro delas os arquivos referentes aos comandos personalizados daquele tipo de teste.
    Há, também, um arquivo para comandos gerais chamado **commands.js** que permanece no diretório **cypress/support**.
    O arquivo **e2e.js** contém a importação desses comandos personalizados para intepretação do Cypress.

    d. Os diretórios **cypress/screenshots** e **cypress/videos** são para armazenar evidências.

    e. O arquivo **cypress.config.js** contém as configurações específicas do Cypress para o projeto, tal como a URL base que será utilizada nos testes de API para facilitar a manutenção dos testes.



