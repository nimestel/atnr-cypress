import {ContentBlock} from "./ContentBlock";

export class AgencyBlock extends ContentBlock{

    constructor() {
        super('agency');
        this.teamMembers = '.agency__team-members';
        this.partners = '.partners';
        this.btnSaifu = '.partners__item_saifu';
        this.btnAnykeylab = '.partners__item_anykey';
        this.btnLinkedin = '.partners__item_aureum';
        this.btnCryptoalerts = '.partners__item_cra';
        this.address = '.agency__address';

        this.name = 'Agency'
    }

    verifyElements() {
        cy.get(this.mainElement).find(this.teamMembers).should('be.visible');
        cy.get(this.mainElement).find(this.btnSaifu).should('be.visible');
        cy.get(this.mainElement).find(this.btnAnykeylab).should('be.visible');
        cy.get(this.mainElement).find(this.btnLinkedin).should('be.visible');
        cy.get(this.mainElement).find(this.btnCryptoalerts).should('be.visible');
        cy.get(this.mainElement).find(this.address).should('be.visible');
        return this;
    }

    contains(value) {
        return cy.get(this.address).invoke('text').then((text) => {
            text = text.replace(/[\s\n]+/g, " ").trim();
            expect(text).contain(value);
        });
    }
}

export const agencyBlock = new AgencyBlock();
