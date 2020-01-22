import {hwwBlock1} from './HowWeWorkBlock1';
import {wwdBlock} from './WhatWeDoBlock';
import {agencyBlock} from './AgencyBlock';

export class NavMenu {


    constructor() {
        this.mainElement = '.home__grid2';
        this.linkHowWeWork = '.home__link_hww';
        this.linkWhatWeDo = '.home__link_wwd';
        this.linkAgency = '[href$=agency]';
    }

    verifyElements() {
        cy.get(this.mainElement).find(this.linkHowWeWork).should('be.visible');
        cy.get(this.mainElement).find(this.linkWhatWeDo).should('be.visible');
        cy.get(this.mainElement).find(this.linkAgency).should('be.visible');
    }

    openHowWeWorkBlock() {
        cy.get(this.mainElement).find(this.linkHowWeWork).click();
        return hwwBlock1
    }

    openWhatWeDoBlock() {
        cy.get(this.mainElement).find(this.linkWhatWeDo).click();
        return wwdBlock;
    }

    openAgencyBlock() {
        cy.get(this.mainElement).find(this.linkAgency).click();
        return agencyBlock;
    }

};

export const navMenu = new NavMenu();