import {mainPage} from '../pages/MainPage';
import {navMenu} from "../pages/NavigationMenu";
import {agencyBlock} from "../pages/AgencyBlock";

describe('check address', () => {
    before(function () {
        mainPage.open();
        navMenu.openAgencyBlock();
    });

    const address = require('../fixtures/address');

    Object.keys(address).forEach(function (part) {
        it(`user sees ${part} in address block`, () => {
            let value = address[part];
            agencyBlock.contains(value);
        });
    });
});
