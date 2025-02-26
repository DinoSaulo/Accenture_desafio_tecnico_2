describe('Desafio Frontend - Parte 2', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/')
    });

    it('Preencher e submeter o Practice Form', () => {
        cy.contains('Forms').click();
        cy.contains('Practice Form').click();

        cy.get('#firstName').type('John');
        cy.get('#lastName').type('Doe');
        cy.get('#userEmail').type('john.doe@example.com');
        cy.get('[for="gender-radio-1"]').click();
        cy.get('#userNumber').type('1234567890');
        cy.get('#dateOfBirthInput').click();
        cy.get('.react-datepicker__day--015').click();
        cy.get('#subjectsInput').type('Math{enter}');
        cy.get('[for="hobbies-checkbox-1"]').click();
        
        const filePath = 'example.txt';
        cy.get('#uploadPicture').attachFile(filePath);
        
        cy.get('#currentAddress').type('123 Cypress Street');
        cy.get('#submit').click();

        cy.get('.modal-content').should('be.visible');
        cy.get('#closeLargeModal').click();
    });

    it('Validar abertura de nova janela no Browser Windows', () => {
        cy.contains('Alerts, Frame & Windows').click();
        cy.contains('Browser Windows').click();
        
        cy.window().then((win) => {
            cy.stub(win, 'open').as('windowOpen')
        });
        
        cy.contains('New Window').click();
        cy.get('@windowOpen').should('be.called');
    });

    it('Criar, editar e deletar um registro em Web Tables', () => {
        cy.contains('Elements').click();
        cy.contains('Web Tables').click();

        cy.contains('Add').click();
        cy.get('#firstName').type('John');
        cy.get('#lastName').type('Doe');
        cy.get('#userEmail').type('john.doe@example.com');
        cy.get('#age').type('30');
        cy.get('#salary').type('50000');
        cy.get('#department').type('Engineering');
        cy.get('#submit').click();
        
        cy.contains('John').parent().find('.mr-2').click();
        cy.get('#salary').clear().type('60000');
        cy.get('#submit').click();
        
        cy.contains('John').parent().find('.action-delete').click();
    });

    it('Validar a Progress Bar', () => {
        cy.contains('Widgets').click();
        cy.contains('Progress Bar').click();
        
        cy.contains('Start').click();
        cy.wait(500);
        cy.get('#progressBar').invoke('attr', 'aria-valuenow').then(value => {
            expect(Number(value)).to.be.lessThan(25);
        });
        
        cy.contains('Start').click();
        cy.wait(3000);
        cy.contains('Reset').click();
    });
});
