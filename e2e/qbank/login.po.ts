import { browser, element, by, protractor} from 'protractor';

export class loginPage{

    PRODUCT_CODE = element(by.id('ProductCode'));
    EXTERNAL_USERID = element(by.name('ExternalUserId'));
    LOGIN_SUBMIT = element(by.css('.btn-submit'));
    DOMAIN_USERNAME = element(by.id('DomainUserName'));
    DOMAIN_PASSWORD = element(by.id('DomainPassword'));
    SUBMIT_BUTTON = element(by.css('.btn-submit'));

    logInWithProductCode(productCode){
      //  browser.ignoreSynchronization = true;
        this.loginWithKecAccount();
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(element(by.id('ProductCode'))),10000);
        this.PRODUCT_CODE.sendKeys(productCode);
        var secs = Math.floor(Date.now() / 1000);
        this.EXTERNAL_USERID.sendKeys('PR'+secs);
        this.LOGIN_SUBMIT.click(); 
        return browser.driver.isElementPresent(by.className('qbank-create-test-body')).then(function (isPresent){
            return isPresent;
        });
    }
    loginWithKecAccount(){
        browser.get('https://qa-atom.kaptest.com/login/kec?redirectUrl=/login/atom');
        this.DOMAIN_USERNAME.sendKeys('kec\\Abot');
        this.DOMAIN_PASSWORD.sendKeys('8ufRAbRa');
        this.SUBMIT_BUTTON.click();
    }
}