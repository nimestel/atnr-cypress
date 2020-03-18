export class BackendBlock {

    constructor() {
        this.mainElement = '[data-anchor="expertises-backend"]';
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
    }
}

export const backendBlock = new BackendBlock();