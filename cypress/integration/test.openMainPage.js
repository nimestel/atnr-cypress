import {mainPage} from '../support/pages/MainPage';

describe('check access home page', () => {
    it('should visit the site', () => {
        cy.log('when user open website');
        cy.visit('/');
        cy.log('then user sees the main elements of site');
        mainPage.verifyElements();
    });

    it('GET request for the home page', () => {
        cy.request('GET', '/')
            .should((response) => {
                expect(response.status).to.eq(200);
                expect(response.headers)
                    .to.have.property('content-type')
                    .to.eq('text/html')
                expect(response.body).contain('<title>Athanor</title>');
            });
    });
});
