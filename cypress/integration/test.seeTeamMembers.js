import {navMenu} from '../support/pages/NavigationMenu';
import { mainPage } from '../support/pages/MainPage';

describe('check team members on main page', () => {
    it('should shoud scroll to agency block', () => {
        const members = require('../fixtures/team');
        mainPage.open();
        agencyBlock = navMenu.openAgencyBlock();

        members.forEach((member) => {
            it(`${member} contains in team block`, () => {
                cy.get(agencyBlock.teamMembers).should('have.text', member)
            });
        });
    });
});