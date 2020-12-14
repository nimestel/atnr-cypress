const open = require('open');

(async () => {
    await open('mochawesome-report/mochawesome.html', {"wait": true });
})();