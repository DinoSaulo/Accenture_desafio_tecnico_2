import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import PracticeFormPage from '../page_objects/practiceFormPage'
import UserGenerator from '../../plugins/userGenerator'

const practiceFormPage = new PracticeFormPage()
const userGenerator = new UserGenerator()

let randomUser;
const txtFile = 'cypress/fixtures/validTextFile.txt';

When("o usuário preenche todos os campos do formulário com valores aleatórios", () => {
    randomUser = userGenerator.generateRandomUser();
    practiceFormPage.fillInputsWithRandomData(randomUser);
})

When("o usuário faz upload de um arquivo .txt válido", () => {
    practiceFormPage.attachTxtFile(txtFile);
})

When("o usuário submete o formulário", () => {
    practiceFormPage.submitForm();
})

Then("um popup de confirmação deve ser exibido", () => {
    practiceFormPage.validateModalData(randomUser, txtFile);
})

Then("o usuário fecha o popup", () => {
    practiceFormPage.closeModal();
})