import { mainPage } from '../support/pages/MainPage';
import { sideMenu } from '../support/pages/SideMenu';

describe('Scroll to main blocks by side menu', () => {
    beforeEach(() => {
        mainPage.open();
    });

    it('click to "how we work" side menu link', () => {
        const hwwBlock = sideMenu.openHowWeWorkBlock();
        hwwBlock.verifyElements();
    });

    it('click to "what we do" side menu link', () => {
        const wwdBlock = sideMenu.openWhatWeDoBlock();
        wwdBlock.verifyElements();
    });

    it('click to "agency" side menu link', () => {
        const agencyBlock = sideMenu.openAgencyBlock();
        agencyBlock.verifyElements();
    });
});