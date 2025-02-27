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

  Scenario: Criar, editar e deletar um novo registro na Web Tables
    Given que o usuário está na pagina inicial do Demo QA
    When o usuário seleciona a opção "Elements" na página inicial
    And o usuário clica no submenu "Web Tables"
    And o usuário cria um novo registro
    And o usuário edita o registro criado
    And o usuário altera o valor do salário
    And o usuário deleta o registro criado
    Then o registro não deve estar mais visível na tabela

  Scenario: Criar e deletar múltiplos registros dinamicamente (EXTRA)
    Given que o usuário está na pagina inicial do Demo QA
    When o usuário seleciona a opção "Elements" na página inicial
    And o usuário clica no submenu "Web Tables"
    And o usuário cria "12" novos registros de forma dinâmica
    And o usuário deleta todos os registros criados
    Then a tabela não deve conter registros criados pelo usuário

  Scenario: Controlar a barra de progresso e validar valores
    Given que o usuário está na pagina inicial do Demo QA
    When o usuário seleciona a opção "Widgets" na página inicial
    And o usuário clica no submenu "Progress Bar"
    And o usuário clica no botão Start
    And o usuário para antes dos "25%"
    Then o valor da Progress Bar deve ser menor ou igual a "25%"
    When o usuário clica no botão Start novamente
    And a Progress Bar chega a 100%
    And o usuário reseta a barra de progresso
    Then a barra de progresso é exibida com "0%"

  Scenario: Reordenar elementos usando Drag and Drop
    Given que o usuário está na pagina inicial do Demo QA
    When o usuário seleciona a opção "Interactions" na página inicial
    And o usuário clica no submenu "Sortable"
    And o usuário arrasta os elementos para colocá-los na ordem decrescente
    Then os elementos devem estar corretamente ordenados