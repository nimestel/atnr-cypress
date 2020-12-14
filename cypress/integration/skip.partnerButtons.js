describe('check links partner buttons', () => {
    const partners = require('../fixtures/partners');

    Object.keys(partners).forEach( (name) => {
        it(`check ${name} is available`, () => {
            let host = partners[name];
            cy.request('GET', host)
                .should((response) => {
                    expect(response.status).to.eq(200);
                    expect(response.headers)
                        .to.have.property('content-type')
                        .to.eq('text/html')
                });
        });
    });
});