import {ContentBlock} from "./ContentBlock";

export class BackendBlock extends ContentBlock{

    constructor() {
        super('expertises-backend');
        this.cardMaintenance = '.card_maintenance';
        this.cardSpa = '.card_spa';
        this.cardInvolvement = '.card_involvement';
        this.cardAnyScreen = '.card_any-screen';
        this.cardAnyPlatform = '.card_any-platform';
    }

    verifyElements() {
        cy.get(this.mainElement).find(this.cardMaintenance).should('be.visible');
        cy.get(this.mainElement).find(this.cardSpa).should('be.visible');
        cy.get(this.mainElement).find(this.cardInvolvement).should('be.visible');
        cy.get(this.mainElement).find(this.cardAnyScreen).should('be.visible');
        cy.get(this.mainElement).find(this.cardAnyPlatform).should('be.visible');
        return this;
    }
}

export const backendBlock = new BackendBlock();