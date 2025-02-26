import BrowserWindowsElements from "../elements/browserWindowsElements"

const browserWindowsElements = new BrowserWindowsElements();

class BrowserWindowsPage {

    clickOnNewWindowButtonAndStub(){
        cy.window().then((win) => {
            cy.stub(win, 'open').as('newWindow');
        });
        
        cy.get(browserWindowsElements.btnNewWindow()).click();
        cy.wait(500);

        cy.get('@newWindow').should('be.called');

        cy.get('@newWindow').then((stub) => {
            const url = stub.getCall(0).args[0];
            cy.visit(url);
        });  
    }

    validateNewOpenedWidow(){
        const popupUrl = cy.location();
        expect(popupUrl).to.not.equal(Cypress.config().baseUrl);
    }

    validateExpectedMessage(expectedMessage){
        cy.get(browserWindowsElements.messageNewWindow()).contains(expectedMessage).should('be.visible'); 
    }
}

export default BrowserWindowsPage