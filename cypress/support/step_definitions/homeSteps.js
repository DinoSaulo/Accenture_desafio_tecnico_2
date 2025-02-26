import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../page_objects/homePage'

const homePage = new HomePage()


Given("que o usuário está na pagina inicial do Demo QA", () => {
    cy.visit("https://demoqa.com/");
})

When("o usuário seleciona a opção {string} na página inicial", (optionName) => {
    homePage.clickOnFunctionButtton(optionName)
})