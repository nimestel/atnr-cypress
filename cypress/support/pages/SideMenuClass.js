export class SideMenu {


    constructor() {
        this.mainElement = '.menu';
        this.openButton = '.header__btn_menu';
        this.closeButton = '.menu__close-btn';
        this.linkHowWeWork = '[href$=how-we-work]';
        this.linkWhatWeDo = '[href$=home]';
        this.linkAgency = '[href$=agency]';
    }

    verifyElements() {
        this.openMenu();
        cy.get(this.mainElement).find(this.linkHowWeWork).should('be.visible');
        cy.get(this.mainElement).find(this.linkWhatWeDo).should('be.visible');
        cy.get(this.mainElement).find(this.linkAgency).should('be.visible');
        this.closeMenu();
    }

    openMenu() {
        cy.get(this.openButton).should('be.visible');
        cy.get(this.openButton).click();
    }

    closeMenu() {
        cy.get(this.closeButton).should('be.visible');
        cy.get(this.closeButton).click();
    }

    openHowWeWorkBlock() {
        this.openMenu();
        cy.get(this.mainElement).find(this.linkHowWeWork).click();
    }

    openWhatWeDoBlock() {
        this.openMenu();
        cy.get(this.mainElement).find(this.linkWhatWeDo).click();
    }

    openAgencyBlock() {
        this.openMenu();
        cy.get(this.mainElement).find(this.linkAgency).click();
    }

};

export const sideMenu = new SideMenu();