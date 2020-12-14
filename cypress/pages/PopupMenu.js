import {hwwBlock1} from './HowWeWorkBlock1';
import {wwdBlock} from './WhatWeDoBlock';
import {agencyBlock} from './AgencyBlock';
import {designBlock} from "./DesignBlock";

export class PopupMenu {

    constructor() {
        this.mainElement = '.navigation__items';
        this.linkHowWeWork = '.navigation-link:nth-child(1)';
        this.linkExpertise = '.navigation-link:nth-child(2)';
        this.linkWhatWeDo = '.navigation-link:nth-child(3)';
        this.linkAgency = '.navigation-link:nth-child(4)';
    }

    verifyElements() {
        cy.get(this.mainElement).find(this.linkHowWeWork).should('be.visible');
        cy.get(this.mainElement).find(this.linkExpertise).should('be.visible');
        cy.get(this.mainElement).find(this.linkWhatWeDo).should('be.visible');
        cy.get(this.mainElement).find(this.linkAgency).should('be.visible');
    }

    openHowWeWorkBlock() {
        cy.get(this.mainElement).find(this.linkHowWeWork).click();
        return hwwBlock1;
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

export const popupMenu = new PopupMenu();
