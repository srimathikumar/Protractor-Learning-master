"use strict";
//<reference path="../../../node_modules/@angular/common/src/directives/ng_class.d.ts"/>
const login_po_1 = require('../pages/login.po');
const studyPlanPage_po_1 = require('../pages/studyPlanPage.po');
const protractor_1 = require('protractor');
// fs is required ????
var fs = require('fs');
describe('StudyPlanTest', function () {
    var testName = this.getFullName();
    let login;
    let studyPlan;
    let originalHandle;
    beforeEach(function () {
        login = new login_po_1.loginPage();
        studyPlan = new studyPlanPage_po_1.studyPlanPage();
    });
    //Test : 1
    it('verifyPracticeTabLoadsPracticePageWhileSessionIsSelected', function () {
        console.log('testing first test in protractor');
        console.log(testName);
        originalHandle = '';
        expect(login.loginWithClassCode('MRGL14025').then(function (value) {
            console.log(value);
        }));
        protractor_1.browser.driver.getWindowHandle().then(function (originalHandle) {
            console.log(originalHandle);
        });
        protractor_1.browser.get('https://feature6-atom.kaptest.com/dashboard');
        protractor_1.browser.sleep(10000);
        // studyPlan.clickMoreResourcesTab();
        // browser.driver.getWindowHandle().then(function(newHandle){
        //     console.log(newHandle);
        // })
        // browser.driver.getCurrentUrl().then(function(url){
        //     console.log(url);
        //     expect(url).toContain('/practice');
        // })
        protractor_1.browser.driver.getCurrentUrl().then(function (url) {
            let list = [4, 5, 6, 7, 8, 9, 9, 9, 9,];
            for (let i in list) {
                console.log(i); // "0", "1", "2",
            }
            console.log(url);
            expect(url).toContain('/dashboard');
        });
    });
});
//# sourceMappingURL=studyPlan-spec.1.js.map