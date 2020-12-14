import { navMenu } from './NavigationMenu';

export class BasePage  {

  constructor() {
    this.mainElement = 'body';
  }

  verifyElements() {
    cy.get(this.mainElement).should('be.visible');
    navMenu.verifyElements();
    return this;
  }

}
