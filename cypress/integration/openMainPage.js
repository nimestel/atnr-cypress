import {mainPage} from '../pages/MainPage';

describe('check access home page', () => {
    it('GET request for the home page', () => {
        cy.request('GET', '/')
            .should((response) => {
                expect(response.status).to.eq(200);
                expect(response.headers)
                    .to.have.property('content-type')
                    .to.contain('text/html; charset=utf-8')
                expect(response.body).contains('<title>Athanor</title>');
            });
    });

    it('should visit the site', () => {
        cy.log('when user open website');
        mainPage.open();
        cy.log('then user sees the main elements of site');
        mainPage.verifyElements();
        cy.log('and user sees the title');
        mainPage.checkTitle('Extremely complex digital products');
    });
});
