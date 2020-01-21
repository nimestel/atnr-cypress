import {BasePage} from './BasePageClass'
import {navMenu} from './NavigationMenuClass';
import {sideMenu} from './SideMenuClass';
import {socialBtns} from './SocialBtnsClass';

export class MainPage extends BasePage {
    constructor() {
        super();
        this.logo = '.header__logo';
        this.cardTechnology = '.card_coordination';
        this.cardObscurity = '.card_obscurity';
        this.cardCoordination = '.card_coordination';
        this.cardTransparency = '.card_transparency';
        this.cardConfidence = '.card_confidence';
        this.cardTrust = '.card_trust';
        this.workScheme = '.scheme';
        this.team = 'agency__team';
    }

    open() {
        cy.visit('https://atnr.pro/');
        this.verifyElements();
    }

    verifyElements() {
        super.verifyElements();
        cy.get(this.logo).should('be.visible');
    }
};

export const mainPage = new MainPage();