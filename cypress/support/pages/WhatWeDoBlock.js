import {ContentBlock} from "./ContentBlock";

export class WhatWeDoBlock extends ContentBlock{

    constructor() {
        super('what-we-do');
        this.workScheme = '.scheme';
        this.btnContact = '.info-btn[title="Telegram"]';
    }

    verifyElements() {
        super.verifyElements();
        cy.get(this.mainElement).find(this.workScheme).should('be.visible');
    }

    contactUs() {
        cy.get(this.mainElement).find(this.btnContact).click({ force: true });
    }
}

export const wwdBlock = new WhatWeDoBlock();