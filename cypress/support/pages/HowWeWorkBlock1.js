export class HowWeWorkBlock1 {

    constructor() {
        this.mainElement = '[data-anchor="how-we-work"]';
        this.cardTechnology = '.card_coordination';
        this.cardObscurity = '.card_obscurity';
        this.cardCoordination = '.card_coordination';
    }

    verifyElements() {
        cy.get(this.mainElement).find(this.cardTechnology).should('be.visible');
        cy.get(this.mainElement).find(this.cardObscurity).should('be.visible');
        cy.get(this.mainElement).find(this.cardCoordination).should('be.visible');
    }

};

export const hwwBlock1 = new HowWeWorkBlock1();