import HomeElements from "../elements/homeElements"

const homeElements = new HomeElements();

class HomePage {
    clickOnFunctionButtton(optionName){
        cy.xpath(homeElements.btnHomeByName(optionName)).click();
        cy.wait(500)
    }
}

export default HomePage