import { mainPage } from '../pages/MainPage';
import { navMenu } from '../pages/NavigationMenu';

describe('Scroll to main blocks by navigation menu', () => {
    beforeEach(() => {
        mainPage.open();
    });

    it('click to "how we work" navigation menu link', () => {
        const hwwBlock = navMenu.openHowWeWorkBlock();
        hwwBlock.verifyElements();
    });

    it('click to "expertise" navigation menu link', () => {
        const expBlock = navMenu.openExpertiseBlock();
        expBlock.verifyElements();
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
