import ProgressBarElements from "../elements/progressBarElements"

const progressBarElements = new ProgressBarElements();
let progressStopped = false;
let progressCompleted = false;

class ProgressBarPage {
    clickOnStartStopButton(){
        cy.get(progressBarElements.btnStartStop()).click();
    }

    waitProgressBarValues(maxValue){
        const minValue = getRandomInt(1, maxValue); //obtem um numero aleatório entre o 1 e o maxValue para ser oo valor minimo do range
        
        cy.get(progressBarElements.progressBarCssSelector(), { timeout: 10000 }).should('exist').then(($progressBar) => {          
            const checkProgress = () => {
                cy.get(progressBarElements.progressBarCssSelector()).invoke('attr', 'aria-valuenow').then((value) => {
                    const progress = parseInt(value, 10);

                    if (progress >= minValue && progress <= maxValue) {
                        cy.log(`Progress reached: ${progress}% - Clicking the button!`);
                        cy.get(progressBarElements.progressBar()).click();
                        progressStopped = true;
                    } else {
                        cy.wait(500); // Espera um pouco para verificar novamenteo valor da barra
                        checkProgress();
                    }
                });
            };
            checkProgress();
        });
    }

    checkProgressBarValueIsLowerThan(maxValue){
        cy.get(progressBarElements.progressBarCssSelector()).invoke('attr', 'aria-valuenow').then((value) => {
            const progress = parseInt(value, 10);
            expect(progress).to.be.lessThan(maxValue);
            cy.log(`✅ Progress is ${progress}%, which is lower than ${maxValue}%`);
        });
    }

    clickOnStartStopButtonAgain(){
        if(progressStopped){
            cy.get(progressBarElements.btnStartStop()).dblclick();
        }
    }

    checkIfProgressBarIsFull(){        
        cy.get(progressBarElements.progressBarCssSelector(), { timeout: 10000 }).should('exist').then(($progressBar) => {          
            const checkProgress = () => {
                cy.get(progressBarElements.progressBarCssSelector()).invoke('attr', 'aria-valuenow').then((value) => {
                    const progress = parseInt(value, 10);
                    if (progress == 100) {
                        expect(progress).to.be.equal(100);
                        progressCompleted = true;
                    } else {
                        cy.wait(500); // Espera um pouco para verificar novamenteo valor da barra
                        checkProgress();
                    }
                });
            };
            checkProgress();
        });
    }

    clickOnResetButton(){
        
        if(progressCompleted){
            //cy.get(progressBarElements.()).click();
            cy.get(progressBarElements.btnReset()).click();
        }
    }

    checkProgressBarValueIsEqualTo(expectedValue){
        cy.get(progressBarElements.progressBarCssSelector()).invoke('attr', 'aria-valuenow').then((value) => {
            const progress = parseInt(value, 10);
            expect(progress).to.be.equal(expectedValue);
        });
    }
}

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

export default ProgressBarPage