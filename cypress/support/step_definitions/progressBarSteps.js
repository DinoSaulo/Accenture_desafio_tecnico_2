import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import ProgressBarPage from '../page_objects/progressBarPage'

const progressBarPage = new ProgressBarPage()

When("o usuário clica no botão Start", () => {
    progressBarPage.clickOnStartStopButton();
})

When("o usuário para antes dos {string}", (porcentage) => {
    const maxValue = parseInt(porcentage.replace('%',''), 10);
    progressBarPage.waitProgressBarValues(maxValue);
})

Then("o valor da Progress Bar deve ser menor ou igual a {string}", (porcentage) => {
    const maxValue = parseInt(porcentage.replace('%',''), 10);
    progressBarPage.checkProgressBarValueIsLowerThan(maxValue);
})

When("o usuário clica no botão Start novamente", () => {
    
    progressBarPage.clickOnStartStopButtonAgain();
})

When("a Progress Bar chega a 100%", () => {
    progressBarPage.checkIfProgressBarIsFull();
})

When("o usuário reseta a barra de progresso", () => {
    progressBarPage.clickOnResetButton();
})

Then("a barra de progresso é exibida com {string}", (porcentage) => {
    const expectedValue = parseInt(porcentage.replace('%',''), 10);
    progressBarPage.checkProgressBarValueIsEqualTo(expectedValue);
})

