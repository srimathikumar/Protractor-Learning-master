//<reference path="../../../node_modules/@angular/common/src/directives/ng_class.d.ts"/>
import { loginPage } from '../pages/login.po';
import { studyPlanPage } from '../pages/studyPlanPage.po';
import { browser } from 'protractor';

// fs is required ????
var fs = require('fs');

describe('StudyPlanTest',function(){

    var testName = this.getFullName();

    let login : loginPage;
    let studyPlan : studyPlanPage;
    let originalHandle : String;

    beforeEach(function(){
        login = new loginPage();
        studyPlan = new studyPlanPage();
    })

    //Test : 1
    it('verifyPracticeTabLoadsPracticePageWhileSessionIsSelected', function(){
        
        console.log('testing first test in protractor');
        console.log(testName);
        originalHandle = '';
        //MRGL14025
        expect(login.loginWithClassCode('MRGL14025').then(function(value){
            console.log(value);
        }));
        
        browser.driver.getWindowHandle().then(function(originalHandle){
            console.log(originalHandle);
        })
        browser.get('https://feature6-atom.kaptest.com/dashboard');
        browser.sleep(10000)
        // studyPlan.clickMoreResourcesTab();

        // browser.driver.getWindowHandle().then(function(newHandle){
        //     console.log(newHandle);
        // })
        // browser.driver.getCurrentUrl().then(function(url){
        //     console.log(url);
        //     expect(url).toContain('/practice');
        // })

       browser.driver.getCurrentUrl().then(function(url){
           let list = [4, 5, 6,7,8,9,9,9,9,];

            for (let i in list) {
                console.log(i); // "0", "1", "2",
            }
            console.log(url);
            expect(url).toContain('/dashboard');
        })
    })

})