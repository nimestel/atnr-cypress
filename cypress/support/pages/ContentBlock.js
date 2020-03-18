export class ContentBlock {

    constructor() {
        this.mainElement = '.section';
    }

    getMainElement() {
        return '[data-anchor="' + this.mainElement + '"]';
    }

    verifyElements() {
        cy.get(this.getMainElement()).should('be.visible');
    }
}