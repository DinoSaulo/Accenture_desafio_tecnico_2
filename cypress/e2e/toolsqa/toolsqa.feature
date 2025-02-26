Feature: Formulário de Cadastro no DemoQA

  Scenario: Preenchimento e submissão do formulário com sucesso
    Given que o usuário está na pagina inicial do Demo QA
    When o usuário seleciona a opção "Forms" na página inicial
    And o usuário clica no submenu "Practice Form"
    And o usuário preenche todos os campos do formulário com valores aleatórios
    And o usuário faz upload de um arquivo .txt válido
    And o usuário submete o formulário
    Then um popup de confirmação deve ser exibido
    And o usuário fecha o popup

  Scenario: Abrir uma nova janela e validar a mensagem exibida
    Given que o usuário está na pagina inicial do Demo QA
    When o usuário seleciona a opção "Alerts, Frame & Windows" na página inicial
    And o usuário clica no submenu "Browser Windows"
    And o usuário clica no botão "New Window"
    Then uma nova janela deve ser aberta
    And a mensagem "This is a sample page" deve estar visível
    And o usuário fecha a nova janela