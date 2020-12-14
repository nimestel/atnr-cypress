import {ContentBlock} from "./ContentBlock";

export class HowWeWorkBlock1 extends ContentBlock{

    constructor() {
        super('how-we-work');
        this.cardTechnology = '.card_technology';
        this.cardObscurity = '.card_obscurity';
        this.cardCoordination = '.card_coordination';

        this.name = 'How we work';
    }

    verifyElements() {
        cy.get(this.mainElement).find(this.cardTechnology).should('be.visible');
        cy.get(this.mainElement).find(this.cardObscurity).should('be.visible');
        cy.get(this.mainElement).find(this.cardCoordination).should('exist');
    }
}

export const hwwBlock1 = new HowWeWorkBlock1();
