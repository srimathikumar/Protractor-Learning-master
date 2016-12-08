"use strict";
const protractor_1 = require('protractor');
class loginPage {
    constructor() {
        this.PRODUCT_CODE = protractor_1.element(protractor_1.by.id('ProductCode'));
        this.EXTERNAL_USERID = protractor_1.element(protractor_1.by.name('ExternalUserId'));
        this.LOGIN_SUBMIT = protractor_1.element(protractor_1.by.css('.btn-submit'));
        this.DOMAIN_USERNAME = protractor_1.element(protractor_1.by.id('DomainUserName'));
        this.DOMAIN_PASSWORD = protractor_1.element(protractor_1.by.id('DomainPassword'));
        this.SUBMIT_BUTTON = protractor_1.element(protractor_1.by.css('.btn-submit'));
        this.CLASS_CODE = protractor_1.element(protractor_1.by.id('ClassCode'));
    }
    logInWithProductCode(productCode) {
        protractor_1.browser.ignoreSynchronization = true;
        this.loginWithKecAccount();
        protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.elementToBeClickable(protractor_1.element(protractor_1.by.id('ProductCode'))), 10000);
        this.PRODUCT_CODE.sendKeys(productCode);
        var secs = Math.floor(Date.now() / 1000);
        this.EXTERNAL_USERID.sendKeys('PR' + secs);
        this.LOGIN_SUBMIT.click();
        // return browser.driver.isElementPresent(by.className('qbank-create-test-body')).then(function (isPresent){
        //     return isPresent;
        // });
        // let studyPlan : studyPlanPage;
        // studyPlan = new studyPlanPage();
        // return studyPlan.waitForStudyPlanToFinishLoading();
        return protractor_1.browser.driver.isElementPresent(protractor_1.by.css('content')).then(function (isPresent) {
            return isPresent;
        });
    }
    //Login with just CAID
    loginWithClassCode(classCode) {
        protractor_1.browser.ignoreSynchronization = true;
        // this.loginWithKecAccount();
        protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.elementToBeClickable(this.CLASS_CODE), 10000);
        this.CLASS_CODE.sendKeys(classCode);
        var secs = Math.floor(Date.now() / 1000);
        this.EXTERNAL_USERID.sendKeys('PR' + secs);
        this.LOGIN_SUBMIT.click();
        return protractor_1.browser.driver.isElementPresent(protractor_1.by.css('content')).then(function (isPresent) {
            return isPresent;
        });
    }
    loginWithKecAccount() {
        // browser.get('https://qa-atom.kaptest.com/login/kec?redirectUrl=/login/atom');
        protractor_1.browser.get('https://feature6-atom.kaptest.com/login/kec?redirectUrl=/login/atom');
        this.DOMAIN_USERNAME.sendKeys('kec\\Abot');
        this.DOMAIN_PASSWORD.sendKeys('8ufRAbRa');
        this.SUBMIT_BUTTON.click();
    }
}
exports.loginPage = loginPage;
//# sourceMappingURL=login.po.js.map