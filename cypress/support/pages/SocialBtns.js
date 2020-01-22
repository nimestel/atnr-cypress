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
    }

    openTelegram() {
        cy.get(this.mainElement).find(this.btnTelegram).click({ force: true });
    }

    openBehance() {
        cy.get(this.mainElement).find(this.btnBehance).click({ force: true });
    }

    openMail() {
        cy.get(this.mainElement).find(this.btnMail).click({ force: true });
    }

};

export const socialBtns = new SocialBtns();