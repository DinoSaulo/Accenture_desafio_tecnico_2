import SortableElements from "../elements/sortableElements"
import 'cypress-real-events/support';

const sortableElements = new SortableElements();

class SortablePage {
    reorderListInReverse() {
        const itemsText = ["Six", "Five", "Four", "Three", "Two", "One"];

        cy.xpath(sortableElements.elementsOfTheList())
            .then(($items) => {
                const itemsArray = Array.from($items);
    
                cy.wrap(itemsArray[0]).then(($destination) => {
                    const destinationRect = $destination[0].getBoundingClientRect();
                    const destinationX = destinationRect.x + destinationRect.width / 2;
                    const destinationY = destinationRect.y + destinationRect.height / 2;
    
                    cy.log(`Destino X: ${destinationX}, Destino Y: ${destinationY}`);
    
                    itemsText.forEach((text) => {
                        const target = itemsArray.find(el => el.innerText.trim() === text);
    
                        if (target) {
                            cy.wrap(target)
                                .realMouseDown() // Segura o item
                                .wait(200)
                                .realMouseMove(destinationX, destinationY, { position: "center" }) // Move até o destino
                                .wait(200)
                                .realMouseUp(); // Solta o item
                        }
                    });
                });
            });
    }

    validateListOrder(expectedOrderArray) {
        cy.xpath(sortableElements.elementsOfTheList()).then(($items) => {
            const orderedItems = $items.map((_, el) => Cypress.$(el).text().trim()).get();
            expect(orderedItems).to.deep.equal(expectedOrderArray);
        });
    }
}

export default SortablePage