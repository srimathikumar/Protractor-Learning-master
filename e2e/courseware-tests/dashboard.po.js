"use strict";
var protractor_1 = require("protractor");
var envConfig_1 = require("./envConfig");
//TEST CONFIGURATIONS
var config = 'feature6';
var kec_username = 'abot';
var kec_password = '8ufRAbRa';
var env = new envConfig_1.envConfig();
var dashBoard = (function () {
    function dashBoard() {
        //ELEMENTS
        // ICON = 'db-assignment-progress div.assignment__group__label span';
        this.ICON = protractor_1.element(protractor_1.by.css('db-assignment-progress div.assignment__group__label span'));
        this.AssignmenType = protractor_1.element(protractor_1.by.css('db-assignment-progress div.assignment__group__label h4'));
        this.ProgressComplete = protractor_1.element(protractor_1.by.css('db-assignment-progress div.assignment__group__summary h5'));
        // TimeRemaining = this.ProgressComplete + ' span';
        this.TimeRemaining = this.ProgressComplete.element(protractor_1.by.css(' span'));
        // User = 'DomainUserName';
        // Password = 'DomainPassword';
        this.User = protractor_1.element(protractor_1.by.id('DomainUserName'));
        this.Password = protractor_1.element(protractor_1.by.id('DomainPassword'));
        this.LoginSubmit = protractor_1.element(protractor_1.by.css('.btn-submit'));
        this.ProductCode = protractor_1.element(protractor_1.by.id('ProductCode'));
        this.ExternalUserID = protractor_1.element(protractor_1.by.id('ExternalUserId'));
        this.ClassCode = protractor_1.element(protractor_1.by.id('ClassCode'));
        this.SubmitBtn = protractor_1.element(protractor_1.by.css('.btn-submit'));
        this.Email = protractor_1.by.id('email');
        this.Pwd = protractor_1.by.id('password');
        this.LoginBtn = protractor_1.by.xpath('//*[@type="submit"]');
        this.ContinueLink = protractor_1.by.className('homework--link');
        this.Homework = protractor_1.by.css('.card div p');
    }
    dashBoard.prototype.getDomain = function () {
        protractor_1.browser.ignoreSynchronization = true;
        env.setenv(config);
        var url = 'https://' + env.getenv();
        return url;
    };
    dashBoard.prototype.loginToStudyPlanViaBackDoor = function (productConfig) {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.get(this.getDomain() + '/login/atom/');
        protractor_1.browser.sleep(2000);
        this.User.sendKeys(kec_username);
        this.Password.sendKeys(kec_password);
        this.LoginSubmit.click();
        this.ProductCode.sendKeys(productConfig);
        this.ExternalUserID.sendKeys('hi');
        this.LoginSubmit.click();
    };
    dashBoard.prototype.goToChannel = function () {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.get(this.getDomain() + '/channel/');
    };
    dashBoard.prototype.loginToDashboardViaBackDoor = function (classCode) {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.get(this.getDomain() + '/login/atom/');
        protractor_1.browser.sleep(2000);
        this.User.sendKeys(kec_username);
        this.Password.sendKeys(kec_password);
        this.LoginSubmit.click();
        this.ClassCode.sendKeys(classCode);
        this.ExternalUserID.sendKeys('hi');
        this.SubmitBtn.click();
        protractor_1.browser.get(this.getDomain() + '/dashboard/');
        protractor_1.browser.sleep(3000);
    };
    dashBoard.prototype.loginToDashboardViaFrontDoor = function (email, password) {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.get('http://www.kaptest.com/login.jhtml');
        protractor_1.browser.sleep(2000);
        protractor_1.element(this.Email).sendKeys(email);
        protractor_1.element(this.Pwd).sendKeys(password);
        protractor_1.element(this.LoginBtn).click();
        protractor_1.browser.sleep(2000);
        protractor_1.browser.get('https://www.kaptest.com/myaccount');
        protractor_1.browser.sleep(5000);
        var dom = this.getDomain();
        protractor_1.element(protractor_1.by.linkText('Access my Online Resources')).getAttribute('href').then(function (text) {
            protractor_1.browser.get(dom + text.substring(23));
            protractor_1.browser.sleep(5000);
        });
        protractor_1.browser.get(this.getDomain() + '/dashboard/');
        protractor_1.browser.sleep(5000);
    };
    dashBoard.prototype.getDashboardPageTitle = function () {
        //browser.ignoreSynchronization = true;
        return protractor_1.element(protractor_1.by.css('h1')).getText().then(function (text) {
            return text;
        });
    };
    dashBoard.prototype.getSessionTitle = function () {
        //browser.ignoreSynchronization = true;
        return protractor_1.element(protractor_1.by.css('h2')).getText().then(function (text) {
            return text;
        });
    };
    dashBoard.prototype.getNoHomeworkText = function () {
        //browser.ignoreSynchronization = true;
        return protractor_1.element(this.Homework).getText().then(function (text) {
            return text;
        });
    };
    dashBoard.prototype.getContinueLinkAddress = function () {
        //browser.ignoreSynchronization = true;
        return protractor_1.element(this.ContinueLink).getAttribute('href').then(function (text) {
            return text;
        });
    };
    dashBoard.prototype.clickContinue = function () {
        //browser.ignoreSynchronization = true;
        protractor_1.element(this.ContinueLink).click();
        protractor_1.browser.sleep(5000);
    };
    dashBoard.prototype.verifyContinueLink = function () {
        //browser.ignoreSynchronization = true;
        return protractor_1.element(this.ContinueLink).isPresent().then(function () {
            console.log('Continue link visible');
            //this.clickContinue();
            return true;
        }, function (err) {
            console.error("Continue link not displyed");
            return false;
        });
    };
    dashBoard.prototype.verifyLessonTitle = function () {
        //browser.ignoreSynchronization = true;
        return protractor_1.element(protractor_1.by.css('h3')).isPresent().then(function () {
            console.log('Lesson Title link visible');
            return true;
        }, function (err) {
            console.error("Lesson Title not displyed");
            return false;
        });
    };
    dashBoard.prototype.verifyIconPresent = function () {
        //browser.ignoreSynchronization = true;
        return this.ICON.isPresent().then(function () {
            console.log('Icon visible');
            return true;
        }, function (err) {
            console.error("Icon not displyed");
            return false;
        });
    };
    dashBoard.prototype.verifyAssignmentTypePresent = function () {
        //browser.ignoreSynchronization = true;
        return this.AssignmenType.isPresent().then(function () {
            console.log('AssignmentType visible');
            return true;
        }, function (err) {
            console.error("AssignmentType not displyed");
            return false;
        });
    };
    dashBoard.prototype.verifyProgressBarPresent = function () {
        //browser.ignoreSynchronization = true;
        return this.ProgressComplete.isPresent().then(function () {
            console.log('% Complete visible');
            return true;
        }, function (err) {
            console.error("% Complete not displyed");
            return false;
        });
    };
    dashBoard.prototype.verifyTimeRemainingPresent = function () {
        //browser.ignoreSynchronization = true;
        return this.TimeRemaining.isPresent().then(function () {
            console.log('Time visible');
            return true;
        }, function (err) {
            console.error("Time not displyed");
            return false;
        });
    };
    return dashBoard;
}());
exports.dashBoard = dashBoard;
