export class NavMenu {


    constructor() {
        this.mainElement = '.home__grid2';
        this.linkHowWeWork = '.home__link_hww';
        this.linkWhatWeDo = '.home__link_wwd';
        this.linkAgency = '.home__link_exp';
    }

    verifyElements() {
        cy.get(this.mainElement).find(this.linkHowWeWork).should('be.visible');
        cy.get(this.mainElement).find(this.linkWhatWeDo).should('be.visible');
        cy.get(this.mainElement).find(this.linkAgency).should('be.visible');
    }

    openHowWeWorkBlock() {
        cy.get(this.mainElement).find(this.linkHowWeWork).click();
    }

    openWhatWeDoBlock() {
        cy.get(this.mainElement).find(this.linkWhatWeDo).click();
    }

    openAgencyBlock() {
        cy.get(this.mainElement).find(this.linkAgency).click();
    }

};

export const navMenu = new NavMenu();