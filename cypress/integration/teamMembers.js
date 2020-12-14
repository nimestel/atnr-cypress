import {navMenu} from '../pages/NavigationMenu';
import {mainPage} from '../pages/MainPage';

describe('see team members on main page', () => {
    it('checks the agency block contains the names of team members', () => {
        cy.fixture('team').then(team => {
            mainPage.open();
            cy.log('when user open "agency" block');
            const agencyBlock = navMenu.openAgencyBlock();
            cy.log('then user sees the names of team members');
            team.forEach(member => {
                cy.log(`then user sees name ${member}`);
                cy.get(agencyBlock.teamMembers).should('contain', member);
            });
        });
    });
});
