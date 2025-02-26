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
        getUserRowIndex(randomRegister).then((index) => {
            cy.log(`Registro encontrado na linha: ${index}`);
            expect(index).to.not.equal(-1);
            cy.get(webTablesElements.btnDeleteUserByIndex(index)).click()
        });
    }

    validateThatRegisterIsNotPresent(randomRegister){
        getUserRowIndex(randomRegister).then((index) => {
            (index).should('equal', -1);
        });
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