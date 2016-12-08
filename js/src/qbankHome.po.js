"use strict";
const protractor_1 = require('protractor');
class qbankHomePage {
    constructor() {
        this.CREATE_QBANK_QUESTIONS = protractor_1.element(protractor_1.by.css('.create-test-btn'));
    }
    goToQBankHome() {
        return protractor_1.browser.get('https://qa-atom.kaptest.com/qbank');
    }
    clickHeaderNavTabScrollsToSection(title, scrollToSection) {
        var section = protractor_1.element(protractor_1.by.css('#' + scrollToSection + ' .container'));
    }
    hamburgerMenuIsVisible() {
        return protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.elementToBeClickable(protractor_1.element(protractor_1.by.css('.fa-bars'))), 5000).then(function () {
            console.log('hamburger visible');
            return true;
        }, function (err) {
            console.error("failed hamburfer test");
            return false;
        });
    }
    reviewContentItem(sequenceId, sequence) {
        var url = 'https://qa-atom.kaptest.com/qbank/review/preview/' + sequenceId + '/' + sequence;
        protractor_1.browser.get(url);
        return protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.elementToBeClickable(protractor_1.element(protractor_1.by.css('.answer-choice-text'))), 10000).then(function () {
            return true;
        }, function (err) {
            return false;
        });
    }
    clickCreateQBank() {
        this.CREATE_QBANK_QUESTIONS.click();
    }
}
exports.qbankHomePage = qbankHomePage;
//# sourceMappingURL=qbankHome.po.js.map