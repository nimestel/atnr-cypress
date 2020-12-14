export class SocialBtns {

    constructor() {
        this.mainElement = '.header__btns';
        this.btnTelegram = '[title="Telegram"]';
        this.btnBehance = '[title="Behance"]';
        this.btnMail = '.email-address';
    }

    verifyElements() {
        cy.get(this.mainElement).find(this.btnBehance).should('be.visible');
        cy.get(this.mainElement).find(this.btnTelegram).should('be.visible');
        cy.get(this.mainElement).find(this.btnMail).should('be.visible');
        return this;
    }
}

export const socialBtns = new SocialBtns();
