import {hwwBlock1} from './HowWeWorkBlock1';
import {wwdBlock} from './WhatWeDoBlock';
import {agencyBlock} from './AgencyBlock';

export class SideMenu {


    constructor() {
        this.mainElement = '.menu';
        this.openButton = '.header__btn_menu';
        this.closeButton = '.menu__close-btn';
        this.linkHowWeWork = '[href$=how-we-work]';
        this.linkWhatWeDo = '[href$=what-we-do]';
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
        cy.get(this.openButton).click();
    }

    closeMenu() {
        cy.get(this.closeButton).click();
    }

    openHowWeWorkBlock() {
        this.openMenu();
        cy.get(this.mainElement).find(this.linkHowWeWork).click();
        return hwwBlock1;
    }

    openWhatWeDoBlock() {
        this.openMenu();
        cy.get(this.mainElement).find(this.linkWhatWeDo).click();
        return wwdBlock;
    }

    openAgencyBlock() {
        this.openMenu();
        cy.get(this.mainElement).find(this.linkAgency).click();
        return agencyBlock;
    }

};

export const sideMenu = new SideMenu();