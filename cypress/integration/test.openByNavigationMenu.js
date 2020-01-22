import { mainPage } from '../support/pages/MainPage';
import { navMenu } from '../support/pages/NavigationMenu';

describe('Scroll to main blocks by navigation menu', () => {
    beforeEach(() => {
        mainPage.open();
    });

    it('click to "how we work" navigation menu link', () => {
        const hwwBlock = navMenu.openHowWeWorkBlock();
        hwwBlock.verifyElements();
    });

    it('click to "what we do" navigation menu link', () => {
        const wwdBlock = navMenu.openWhatWeDoBlock();
        wwdBlock.verifyElements();
    });

    it('click to "agency" navigation menu link', () => {
        const agencyBlock = navMenu.openAgencyBlock();
        agencyBlock.verifyElements();
    });

});
