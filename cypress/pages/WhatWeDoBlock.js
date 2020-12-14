import {ContentBlock} from "./ContentBlock";

export class WhatWeDoBlock extends ContentBlock{

    constructor() {
        super('what-we-do');
        this.workScheme = '.scheme';
        this.btnContact = '.info-btn[title="Telegram"]';

        this.name = 'What we do';
    }

    verifyElements() {
        super.verifyElements();
        cy.get(this.mainElement).find(this.workScheme).should('be.visible');
        return this;
    }

    contactUs() {
        cy.get(this.mainElement).find(this.btnContact).click({ force: true });
        return this;
    }
}

export const wwdBlock = new WhatWeDoBlock();
