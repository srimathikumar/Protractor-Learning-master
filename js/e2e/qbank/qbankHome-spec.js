"use strict";
const login_po_1 = require('./login.po');
const qbankHome_po_1 = require('./qbankHome.po');
const protractor_1 = require('protractor');
const videoPlayer_po_1 = require('./videoPlayer.po');
const qbank_po_1 = require('./qbank.po');
const javascript_po_1 = require('./javascript.po');
var fs = require('fs');
describe('qbankHomeTest', function () {
    var testName = this.getFullName();
    let login;
    let qbankHome;
    let videoPlayer;
    let qbank;
    let jPage;
    beforeEach(function () {
        login = new login_po_1.loginPage();
        qbankHome = new qbankHome_po_1.qbankHomePage();
        videoPlayer = new videoPlayer_po_1.videoPlayerPage();
        qbank = new qbank_po_1.qbankPage();
        jPage = new javascript_po_1.javascriptPage();
    });
    it('verifyScrollingAndHeaderNavigationWorkTogether', function () {
        //  pending('Force skip');
        login.logInWithProductCode('SHIELD');
    });
    it('verifyResponsiveMenuAppears', function () {
        login.logInWithProductCode('SHIELD');
        protractor_1.browser.driver.manage().window().setSize(320, 480);
        qbankHome.goToQBankHome();
        qbankHome.hamburgerMenuIsVisible().then(function (txt) {
            console.log('before print');
            console.log(txt);
        });
        console.log('after test');
        expect(qbankHome.hamburgerMenuIsVisible()).toBe(true, 'hamburger menu visible test failed');
    });
    it('test function', function () {
        console.log('test function');
    });
    fit('verifyAnswerChoiceContentItemsDisplayedInItemReviewSection', function () {
        login.logInWithProductCode('SHIELD');
        qbankHome.goToQBankHome();
        protractor_1.browser.manage().addCookie('atom.web.fakes', 'GET={"/api/qbank/jasper/content/preview/286663/1":"http://qa-atom-support.kaptest.com/Atom/json/api/jasper/content/preview/NewJSONFormat/QBank_AllContentItems.json"}');
        protractor_1.browser.sleep(5000);
        expect(qbankHome.reviewContentItem('286663', '1')).toBe(true, 'Answer choice display after override');
        protractor_1.browser.sleep(5000);
    });
    it('verifyVideoSpeed', function () {
        login.logInWithProductCode('SHIELD');
        protractor_1.browser.sleep(3000);
        expect(videoPlayer.orientationVideoIsDisplayed()).toBe(true, 'video player displayed on homepage');
        videoPlayer.clickInitialPlayInVideoPlayer();
        protractor_1.browser.sleep(1000);
        videoPlayer.clickVideoSpeedButton_Relative('1.5x');
        protractor_1.browser.sleep(2000);
        videoPlayer.clickMaximizeMinimizeButton();
        protractor_1.browser.sleep(2000);
        videoPlayer.clickMaximizeMinimizeButton();
        protractor_1.browser.sleep(1000);
        videoPlayer.clickPauseInVideoPlayer();
        protractor_1.browser.sleep(2000);
        videoPlayer.dragScrubBarToPercent_1(100.0);
        protractor_1.browser.sleep(3000);
    });
    it('assertTextCanBehigHighlighted', function () {
        login.logInWithProductCode('SHIELD');
        protractor_1.browser.sleep(3000);
        qbankHome.clickCreateQBank();
        protractor_1.browser.sleep(10000);
        qbank.highlightText();
        protractor_1.browser.sleep(1000);
        qbank.getHighlightedText();
        protractor_1.browser.sleep(5000);
    });
    it('takeScreenShotOnFailure', function () {
        login.logInWithProductCode('SHIELD');
        protractor_1.browser.driver.manage().window().setSize(320, 480);
        qbankHome.goToQBankHome();
        expect(qbankHome.hamburgerMenuIsVisible()).toBe(false, 'hamburger menu visible test failed');
    });
    fit('automateTestUIwithNgTags', function () {
        console.log(testName);
        login.logInWithProductCode('SHIELD');
        protractor_1.browser.sleep(3000);
        qbankHome.clickCreateQBank();
        protractor_1.browser.sleep(5000);
        qbank.selectAnswer(0);
        protractor_1.browser.sleep(3000);
        qbank.markQuestion();
        protractor_1.browser.sleep(3000);
        qbank.getQuestionId().then(function (text) {
            console.log(text);
        });
    });
    it('function Overload test', function () {
        //   jPage.functionOverload();
    });
    afterEach(function () {
        /*
        
          // var spec = jasmine.getEnv().currentSpec;
           // var specName = spec.description.split('').join('_');
           var specName = 'test';
        
         //   if(spec.results().passed()) return;
        
            browser.takeScreenshot().then(function(png){
                var stream = fs.createWriteStream('reports/'+specName+'.png');
                stream.write(new Buffer(png,'base64'));
                stream.end();
            }); */
    });
});
//# sourceMappingURL=qbankHome-spec.js.map