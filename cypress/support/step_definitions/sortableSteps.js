import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import SortablePage from '../page_objects/sortablePage';

const sortablePage = new SortablePage()

When("o usuário arrasta os elementos para colocá-los na ordem decrescente", () => {
    sortablePage.reorderListInReverse();
})

Then("os elementos devem estar corretamente ordenados", () => {
    const expectedOrderArray = ["Six", "Five", "Four", "Three", "Two", "One"];
    sortablePage.validateListOrder(expectedOrderArray);
})