"use strict";
const protractor_1 = require('protractor');
class waitToolPage {
    waitForElementDisplay(webElement, timeOutInSeconds) {
        protractor_1.browser.wait(webdriver.until.elementLocated(webElement), timeOutInSeconds);
        return protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.presenceOf(webElement), timeOutInSeconds).then(function () {
            return true;
        }, function (err) {
            return false;
        });
    }
}
exports.waitToolPage = waitToolPage;
//# sourceMappingURL=waitTool.po.js.map