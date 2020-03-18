import {hwwBlock1} from './HowWeWorkBlock1';
import {wwdBlock} from './WhatWeDoBlock';
import {agencyBlock} from './AgencyBlock';
import {designBlock} from './DesignBlock';

export class NavMenu {


    constructor() {
        this.mainElement = '.home__grid2';
        this.linkHowWeWork = '.home__link_hww';
        this.linkExpertise = '.home__link_exp';
        this.linkWhatWeDo = '.home__link_wwd';
        this.linkAgency = '.home__link_ag';
    }

    verifyElements() {
        cy.get(this.mainElement).find(this.linkHowWeWork).should('be.visible');
        cy.get(this.mainElement).find(this.linkExpertise).should('be.visible');
        cy.get(this.mainElement).find(this.linkWhatWeDo).should('be.visible');
        cy.get(this.mainElement).find(this.linkAgency).should('be.visible');
    }

    openHowWeWorkBlock() {
        cy.get(this.mainElement).find(this.linkHowWeWork).click({force: true});
        return hwwBlock1
    }

    openExpertiseBlock() {
        cy.get(this.mainElement).find(this.linkExpertise).click();
        return designBlock;
    }

    openWhatWeDoBlock() {
        cy.get(this.mainElement).find(this.linkWhatWeDo).click();
        return wwdBlock;
    }

    openAgencyBlock() {
        cy.get(this.mainElement).find(this.linkAgency).click();
        return agencyBlock;
    }

}

export const navMenu = new NavMenu();