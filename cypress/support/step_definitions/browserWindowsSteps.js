import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import BrowserWindowsPage from '../page_objects/browserWindowsPage'

const browserWindowsPage = new BrowserWindowsPage()

When("o usuário clica no botão {string}", (buttonOption) => {
    switch (buttonOption) {
        case "New Window":
            browserWindowsPage.clickOnNewWindowButtonAndStub();
            break;
        case "New Tab":
            break;
        case "New Window Message":
            break;
        default:
            console.log(`Sorry, we are out of ${expr}.`);
    } 
})

Then("uma nova janela deve ser aberta", () => {
    browserWindowsPage.validateNewOpenedWidow();
})

Then("a mensagem {string} deve estar visível", (expectedMessage) => {
    browserWindowsPage.validateExpectedMessage(expectedMessage);
})

Then("o usuário fecha a nova janela", () => {
    cy.go('back');
})