import WebTablesElements from "../elements/webTablesElements"

const webTablesElements = new WebTablesElements();
class WebTablesPage {

    clickOnAddButton(){
        cy.get(webTablesElements.btnAddNewUser()).click();
        cy.wait(500)
    }

    fillNewUserRegisterForm(randoUserRegisterData){
        cy.get(webTablesElements.inputFirstName()).type(randoUserRegisterData.firstName);
        cy.get(webTablesElements.inputLastName()).type(randoUserRegisterData.lastName);
        cy.get(webTablesElements.inputUserEmail()).type(randoUserRegisterData.email);
        cy.get(webTablesElements.inputAge()).type(randoUserRegisterData.age);
        cy.get(webTablesElements.inputSalary()).type(randoUserRegisterData.salary);
        cy.get(webTablesElements.inputDepartment()).type(randoUserRegisterData.department);
    }

    clickOnSubmitButton(){
        cy.get(webTablesElements.btnSubmitNewUser()).click();
    }

    checkIfRegisterIsInTheTable(randomUser){
        getUserRowIndex(randomUser).then((index) => {
            cy.log(`Usuário encontrado na linha: ${index}`);
            console.log(index)
            expect(index).to.not.equal(-1);
            cy.get(webTablesElements.btnEditUserByIndex(index)).click()
        });
    }

    updateSalary(newSalary){
        cy.get(webTablesElements.inputSalary()).type('{selectall}').type(newSalary);
        cy.get(webTablesElements.btnSubmitNewUser()).click();
    }

    deleteRegiserInTheTable(randomRegister){
        getUserRowIndex(randomRegister).then((registerIndex) => {
            cy.log(`Registro encontrado na linha: ${registerIndex}`);
            expect(registerIndex).to.not.equal(-1);
            cy.xpath(webTablesElements.registerByRowIndex(registerIndex)).click();
        });
    }

    validateThatRegisterIsNotPresent(randomRegister){
        getUserRowIndex(randomRegister).then((index) => {
            expect(index).to.equal(-1);
        });
    }

    createNewRegister(randomUser){
        this.clickOnAddButton();
        cy.wait(500)
        this.fillNewUserRegisterForm(randomUser);
        cy.wait(500)
        this.clickOnSubmitButton();
        cy.wait(500)
    }

    createMultipleRegisters(randomRegistersArray) {
        for (const register of randomRegistersArray) {
            this.createNewRegister(register);
        }

        let qtdRegisters = randomRegistersArray.length
        if(qtdRegisters>10){
            this.selectClosestRowsPerPage(qtdRegisters)
        }
    }

    selectClosestRowsPerPage(qtdRegisters) {
        const options = [5, 10, 20, 25, 50, 100];
        const selectedValue = options.find(value => value >= qtdRegisters) || 100;
        cy.get('select[aria-label="rows per page"]').select(selectedValue.toString());
    }

    deleteMultipleRegisters(randomRegistersArray) {
        for (const register of randomRegistersArray) {
            this.deleteRegiserInTheTable(register);
        }
    }

    validateThatRegistersAreNotPresent(randomRegistersArray) {
        for (const register of randomRegistersArray) {
            this.validateThatRegisterIsNotPresent(register);
        }
    }
}

function getUserRowIndex(userData) {
    return new Cypress.Promise((resolve) => {
        let foundIndex = -1; // Inicializa com -1 (não encontrado)
    
        cy.get('.rt-tbody .rt-tr').each(($row, index) => {
            cy.wrap($row).within(() => {
                cy.get('.rt-td').then(($cells) => {
                    const rowData = {
                        firstName: $cells.eq(0).text().trim(),
                        lastName: $cells.eq(1).text().trim(),
                        age: $cells.eq(2).text().trim(),
                        email: $cells.eq(3).text().trim(),
                        salary: $cells.eq(4).text().trim(),
                        department: $cells.eq(5).text().trim(),
                    };
        
                    if (
                    rowData.firstName === userData.firstName &&
                    rowData.lastName === userData.lastName &&
                    rowData.age === userData.age.toString() &&
                    rowData.email === userData.email &&
                    rowData.salary === userData.salary.toString() &&
                    rowData.department === userData.department
                    ) {
                        foundIndex = index+1; // Guarda o índice da linha encontrada
                        return false; // Interrompe a iteração
                    }
                });
            });
        }).then(() => {
            resolve(foundIndex); // Retorna o índice encontrado
        });
    });
}

export default WebTablesPage