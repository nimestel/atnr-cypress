export class ContentBlock {

    constructor(sectionName) {
        this.section = '.section';
        this.sectionName = sectionName;
    }

    get mainElement() {
        return '[data-anchor="' + this.sectionName + '"]';
    }

    verifyElements() {
        cy.get(this.mainElement).should('be.visible');
    }
}