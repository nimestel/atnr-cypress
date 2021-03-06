import {ContentBlock} from "./ContentBlock";

export class DesignBlock extends ContentBlock{

    constructor() {
        super('expertises-design');
        this.cardAestheticFunctionality = '.card_aesthetic-functionality';
        this.cardProductThinking = '.card_product-thinking';
        this.cardSystematic = '.card_systematic';
        this.cardUserCentered = '.card_user-centered';
        this.cardProductStrategyAndIdentity = '.card_product-strategy-and-identity';
    }

    verifyElements() {
        cy.get(this.mainElement).find(this.cardAestheticFunctionality).should('be.visible');
        cy.get(this.mainElement).find(this.cardProductThinking).should('be.visible');
        cy.get(this.mainElement).find(this.cardSystematic).should('be.visible');
        cy.get(this.mainElement).find(this.cardUserCentered).should('be.visible');
        cy.get(this.mainElement).find(this.cardProductStrategyAndIdentity).should('be.visible');
        return this;
    }

}

export const designBlock = new DesignBlock();