import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import SideMenuPage from '../page_objects/sideMenuPage'

const sideMenuPage = new SideMenuPage()

When("o usuário clica no submenu {string}", (subOption) => {
    sideMenuPage.clickSubMenuButtton(subOption)
})