Feature: Formulário de Cadastro no DemoQA

  Scenario: Preenchimento e submissão do formulário com sucesso
    Given que o usuário está na pagina inicial do Demo QA
    When o usuário seleciona a opção "Forms" na página inicial
    And clica no submenu "Practice Form"
    And preenche todos os campos do formulário com valores aleatórios
    And faz upload de um arquivo .txt válido
    And submete o formulário
    Then um popup de confirmação deve ser exibido
    And o usuário fecha o popup