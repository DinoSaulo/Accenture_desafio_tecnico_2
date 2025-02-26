import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import WebTablesPage from '../page_objects/webTablesPage'
import UserGenerator from '../../plugins/userGenerator'

const userGenerator = new UserGenerator();
const webTablesPage = new WebTablesPage();

let randomUser;

When("o usuário cria um novo registro", () => {
    randomUser = userGenerator.generateRandomRegister();

    webTablesPage.clickOnAddButton();
    cy.wait(500)
    webTablesPage.fillNewUserRegisterForm(randomUser);
    cy.wait(500)
    webTablesPage.clickOnSubmitButton();
    cy.wait(500)
})

When("o usuário edita o registro criado", () => {
    const newSalary = randomUser.salary * 1.2;
    webTablesPage.checkIfRegisterIsInTheTable(randomUser);
    //randomUser.salary = newSalary;
    //webTablesPage.updateSalary(newSalary);
})

When("o usuário altera o valor do salário", () => {
    const newSalary = Math.round(randomUser.salary * 1.2);
    webTablesPage.updateSalary(newSalary);
    randomUser.salary = newSalary;
})


When("o usuário deleta o registro criado", () => {
    webTablesPage.deleteRegiserInTheTable(randomUser);
})

Then("o registro não deve estar mais visível na tabela", () => {
    webTablesPage.validateThatRegisterIsNotPresent(randomUser)
})

When("o usuário cria {string} novos registros de forma dinâmica", (qtUsers) => {
    
})

When("o usuário deleta todos os registros criados", () => {
    
})

Then("a tabela não deve conter registros criados pelo usuário", () => {
    
})