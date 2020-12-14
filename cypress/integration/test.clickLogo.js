import {mainPage} from '../pages/MainPage';
import {navMenu} from "../pages/NavigationMenu";

describe('click header Logo', () => {
    it('should scroll to the home page top', () => {
        mainPage.open();
        const wwdBlock = navMenu.openWhatWeDoBlock();
        wwdBlock.verifyElements();

        cy.log('when user click the logo');
        cy.get(mainPage.logo).click();
        cy.log('then user goes to the top');
        mainPage.verifyElements();
    });
});
