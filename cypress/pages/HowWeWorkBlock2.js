import {ContentBlock} from "./ContentBlock";

export class HowWeWorkBlock2 extends ContentBlock{

    constructor() {
        super('how-we-work2');
        this.cardTransparency = '.card_transparency';
        this.cardConfidence = '.card_confidence';
        this.cardTrust = '.card_trust';
    }

    verifyElements() {
        cy.get(this.mainElement).find(this.cardTransparency).should('be.visible');
        cy.get(this.mainElement).find(this.cardConfidence).should('be.visible');
        cy.get(this.mainElement).find(this.cardTrust).should('be.visible');
        return this;
    }
}

export const hwwBlock2 = new HowWeWorkBlock2();