"use strict";
var login_po_1 = require('../pages/login.po');
var studyPlanPage_po_1 = require('../pages/studyPlanPage.po');
var protractor_1 = require('protractor');
// fs is required ????
var fs = require('fs');
describe('StudyPlanTest', function () {
    var testName = this.getFullName();
    var login;
    var studyPlan;
    var originalHandle;
    beforeEach(function () {
        login = new login_po_1.loginPage();
        studyPlan = new studyPlanPage_po_1.studyPlanPage();
    });
    //Test : 1
    it('verifyPracticeTabLoadsPracticePageWhileSessionIsSelected', function () {
        
        console.log('testing first test in protractor');
        console.log(testName);
        originalHandle = '';
        expect(login.logInWithProductCode('MCAT').then(function (value) {
            console.log(value);
        }));
        protractor_1.browser.driver.getWindowHandle().then(function (originalHandle) {
            console.log(originalHandle);
        });
        studyPlan.clickMoreResourcesTab();
        protractor_1.browser.driver.getWindowHandle().then(function (newHandle) {
            console.log(newHandle);
        });
        protractor_1.browser.driver.getCurrentUrl().then(function (url) {
            console.log(url);
            expect(url).toContain('/practice');
        });
    });
});
//# sourceMappingURL=studyPlan-spec.js.map