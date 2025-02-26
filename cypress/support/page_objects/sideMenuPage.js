import SideMenuElements from "../elements/sideMenuElements"

const sideMenuElements = new SideMenuElements();

class HomePage {
    clickSubMenuButtton(optionName){
        cy.xpath(sideMenuElements.btnSubMenuByName(optionName)).click();
    }
}

export default HomePage