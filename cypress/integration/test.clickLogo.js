import {mainPage} from '../support/pages/MainPageClass';

describe('click Logo on main page', () => {
    it('should visit to home page', () => {
        mainPage.open()
        cy.get(mainPage.logo).click();
        mainPage.verifyElements()
        cy.log("Opening home page");
    })
})