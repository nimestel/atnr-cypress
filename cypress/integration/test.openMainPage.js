import { mainPage } from '../support/pages/MainPage';

describe('Open main page', () => {
    it('should visit to Athanor site', () => {
        mainPage.open();
    });
});
