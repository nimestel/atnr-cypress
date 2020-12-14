import {BasePage} from './BasePage'

export class MainPage extends BasePage {

    constructor() {
        super();
        this.logo = '.header__logo';
        this.title = '.home__title';
        this.scroll = '.home__scroll';
        this.rightBlock = '.rp';
        this.leftBlock = '.lp';
    }

    open(){
        cy.visit('/');
    }

    verifyElements() {
        super.verifyElements();
        cy.get(this.logo).should('be.visible');
        cy.get(this.title).should('be.visible');
        cy.get(this.scroll).should('be.visible');
    }
}

export const mainPage = new MainPage();
