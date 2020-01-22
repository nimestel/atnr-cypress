import {BasePage} from './BasePage'
import {navMenu} from './NavigationMenu';
import {sideMenu} from './SideMenu';
import {socialBtns} from './SocialBtns';

export class MainPage extends BasePage {
    constructor() {
        super();
        this.logo = '.header__logo';
    }

    open(){
        cy.visit('/');
        this.verifyElements();
    }

    verifyElements() {
        super.verifyElements();
        cy.get(this.logo).should('be.visible');
    }
};

export const mainPage = new MainPage();