import {hwwBlock1} from './HowWeWorkBlock1';
import {wwdBlock} from './WhatWeDoBlock';
import {agencyBlock} from './AgencyBlock';
import {designBlock} from "./DesignBlock";

export class SideMenu {

    constructor() {
        this.mainElement = '.menu';
        this.openButton = '.header__btn_menu';
        this.closeButton = '.menu__close-btn';
        this.linkHowWeWork = '.link_hww';
        this.linkExpertise = '.link_expertises';
        this.linkWhatWeDo = '.link_wwd';
        this.linkAgency = '.link_agency';
    }

    verifyElements() {
        this.openMenu();
        cy.get(this.mainElement).find(this.linkHowWeWork).should('be.visible');
        cy.get(this.mainElement).find(this.linkExpertise).should('be.visible');
        cy.get(this.mainElement).find(this.linkWhatWeDo).should('be.visible');
        cy.get(this.mainElement).find(this.linkAgency).should('be.visible');
        this.closeMenu();
    }

    openMenu() {
        cy.get(this.openButton).click();
        return this;
    }

    closeMenu() {
        cy.get(this.closeButton).click();
        return this;
    }

    openHowWeWorkBlock() {
        this.openMenu();
        cy.get(this.mainElement).find(this.linkHowWeWork).click();
        return hwwBlock1;
    }

    openExpertiseBlock() {
        this.openMenu();
        cy.get(this.mainElement).find(this.linkExpertise).click();
        return designBlock;
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
}

export const sideMenu = new SideMenu();
