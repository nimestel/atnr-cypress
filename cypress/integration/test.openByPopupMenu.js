import {mainPage} from '../support/pages/MainPage';
import {popupMenu} from '../support/pages/PopupMenu';
import {navMenu} from "../support/pages/NavigationMenu";

describe('Scroll to main blocks by popup menu', () => {
    beforeEach(() => {
        // popup menu appears when we scroll to How We Work block
        mainPage.open()
            cy.then(() => {
                    navMenu.openHowWeWorkBlock();
            })
    });

    it('check that popup menu doesnt visible on first screen', () => {
        cy.get(mainPage.logo).click()
            .then(() => {
                cy.get(popupMenu.mainElement).should('not.be.visible');
            });
    });

    it('check all elements of the popup menu', () => {
        popupMenu.verifyElements();
    });

    it('click to "how we work" link', () => {
        popupMenu.openHowWeWorkBlock().verifyElements();
    });

    it('click to "expertise" link', () => {
        popupMenu.openExpertiseBlock().verifyElements();
    });

    it('click to "what we do" link', () => {
        popupMenu.openWhatWeDoBlock().verifyElements();
    });

    it('click to "agency" link', () => {
        popupMenu.openAgencyBlock().verifyElements();
    });
});
