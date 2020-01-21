import { navMenu } from './NavigationMenuClass';
import { sideMenu } from './SideMenuClass';
import { socialBtns } from './SocialBtnsClass';

export class BasePage  {
  constructor() {
    this.mainElement = 'body';
  }

  verifyElements() {
    cy.get(this.mainElement).should('be.visible');
    navMenu.verifyElements();
  }
};
