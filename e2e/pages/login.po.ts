import { browser, element, by, protractor} from 'protractor';
import { studyPlanPage } from '../pages/studyPlanPage.po';

export class loginPage{

    PRODUCT_CODE = element(by.id('ProductCode'));
    EXTERNAL_USERID = element(by.name('ExternalUserId'));
    LOGIN_SUBMIT = element(by.css('.btn-submit'));
    DOMAIN_USERNAME = element(by.id('DomainUserName'));
    DOMAIN_PASSWORD = element(by.id('DomainPassword'));
    SUBMIT_BUTTON = element(by.css('.btn-submit'));
    CLASS_CODE = element(by.id('ClassCode'));

    logInWithProductCode(productCode){
       browser.ignoreSynchronization = true;
        this.loginWithKecAccount();
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(element(by.id('ProductCode'))),10000);
        this.PRODUCT_CODE.sendKeys(productCode);
        var secs = Math.floor(Date.now() / 1000);
        this.EXTERNAL_USERID.sendKeys('PR'+secs);
        this.LOGIN_SUBMIT.click(); 
        // return browser.driver.isElementPresent(by.className('qbank-create-test-body')).then(function (isPresent){
        //     return isPresent;
        // });
        // let studyPlan : studyPlanPage;
        // studyPlan = new studyPlanPage();
        // return studyPlan.waitForStudyPlanToFinishLoading();

        return browser.driver.isElementPresent(by.css('content')).then(function (isPresent){
              return isPresent;
        });

    }

    //Login with Class Code
    loginWithClassCode(classCode){
        browser.ignoreSynchronization = true;
        console.log("Before kec login");
        
         this.loginWithKecAccount();
         console.log("After kec login");
        // browser.wait(protractor.ExpectedConditions.elementToBeClickable(element(by.id('ClassCode'))),10000);
        
        // browser.wait(protractor.ExpectedConditions.elementToBeClickable(this.CLASS_CODE),10000);
        this.CLASS_CODE.sendKeys(classCode);
                var secs = Math.floor(Date.now() / 1000);
        this.EXTERNAL_USERID.sendKeys('PR'+secs);
        this.LOGIN_SUBMIT.click();
        return browser.driver.isElementPresent(by.css('content')).then(function (isPresent){
              return isPresent;
        });
    }   


    
    loginWithKecAccount(){
        // browser.get('https://qa-atom.kaptest.com/login/kec?redirectUrl=/login/atom');
        browser.get('https://feature6-atom.kaptest.com/login/kec?redirectUrl=/login/atom');
        this.DOMAIN_USERNAME.sendKeys('kec\\Abot');
        this.DOMAIN_PASSWORD.sendKeys('8ufRAbRa');
        this.SUBMIT_BUTTON.click();
    }
}