import {mainPage} from '../support/pages/MainPage';
import {navMenu} from "../support/pages/NavigationMenu";
import {agencyBlock} from "../support/pages/AgencyBlock";

describe('check address', () => {
    before(function () {
        mainPage.open();
        navMenu.openAgencyBlock();
    });

    const address = require('../fixtures/address');

    Object.keys(address).forEach(function (part) {
        it(`user sees ${part} in address block`, () => {
            let value = address[part];

            cy.get(agencyBlock.address).invoke('text').then((text) => {
                text = text.replace(/[\s\n]+/g, " ").trim();
                expect(text).contain(value);
            });
        });
    });
});