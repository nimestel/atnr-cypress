describe('check links social buttons', () => {
    const socials = require('../fixtures/socials');

    Object.keys(socials).forEach(function (name) {
        it(`check ${name} is available`, () => {
            let host = socials[name];
            cy.request('GET', host)
                .should((response) => {
                    expect(response.status).to.eq(200);
                });
        });
    });
});
