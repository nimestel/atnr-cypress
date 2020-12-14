import {mainPage} from '../pages/MainPage';
import {popupMenu} from '../pages/PopupMenu';
import {navMenu} from "../pages/NavigationMenu";

describe('Scroll to main blocks by popup menu', () => {
    beforeEach(() => {
        // popup menu appears when we scroll to How We Work block
        mainPage.open();
        navMenu.openHowWeWorkBlock();
    });

    it('check that popup menu doesnt visible on first screen', () => {
        mainPage.clickLogo();popupMenu.dontVisible();
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
