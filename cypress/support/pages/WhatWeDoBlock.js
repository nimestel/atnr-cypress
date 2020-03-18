export class WhatWeDoBlock {

    constructor() {
        this.mainElement = '[data-anchor="what-we-do"]';
        this.workScheme = '.scheme';
        this.btnContact = '.info-btn[title="Telegram"]';
    }

    verifyElements() {
        cy.get(this.mainElement).find(this.workScheme).should('be.visible');
        cy.get(this.mainElement).find(this.btnContact).should('be.visible');
    }

    contactUs() {
        cy.get(this.mainElement).find(this.btnContact).click({ force: true });
    }
}

export const wwdBlock = new WhatWeDoBlock();