import {mainPage} from '../support/pages/MainPage';

describe('check access home page', () => {
    it('should visit the site', () => {
        cy.log('when user open website');
        cy.visit('/');
        cy.log('then user sees the main elements of site');
        mainPage.verifyElements();
        cy.log('and user sees the title');
        cy.get(mainPage.title).invoke('text').then((text) => {
            let str = text.replace(/[\s\n]+/g," ").trim();
            expect(str).contains("Extremely complex digital products")
        });
    });

    it('GET request for the home page', () => {
        cy.request('GET', '/')
            .should((response) => {
                expect(response.status).to.eq(200);
                expect(response.headers)
                    .to.have.property('content-type')
                    .to.eq('text/html')
                expect(response.body).contains('<title>Athanor</title>');
            });
    });
});
