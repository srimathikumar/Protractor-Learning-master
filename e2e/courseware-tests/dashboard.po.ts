import { browser, element, by, protractor} from 'protractor';
import { envConfig } from './envConfig';

//TEST CONFIGURATIONS
var config = 'feature6';
var kec_username = 'abot';
var kec_password = '8ufRAbRa';
let env = new envConfig();


export class dashBoard{

    //ELEMENTS
    // ICON = 'db-assignment-progress div.assignment__group__label span';
    ICON = element (by.css('db-assignment-progress div.assignment__group__label span'));
    AssignmenType = element (by.css('db-assignment-progress div.assignment__group__label h4'));
    ProgressComplete = element (by.css('db-assignment-progress div.assignment__group__summary h5'));
    // TimeRemaining = this.ProgressComplete + ' span';
    TimeRemaining = this.ProgressComplete.element(by.css(' span'));
    // User = 'DomainUserName';
    // Password = 'DomainPassword';
    User = element(by.id('DomainUserName'))
    Password = element(by.id('DomainPassword'));
    LoginSubmit =element(by.css('.btn-submit'));
    ProductCode = element(by.id('ProductCode'));
    ExternalUserID =  element(by.id('ExternalUserId'));
    ClassCode = element(by.id('ClassCode'));
    SubmitBtn= element(by.css('.btn-submit'));
    Email = by.id('email');
    Pwd = by.id('password');
    LoginBtn = by.xpath('//*[@type="submit"]');
    ContinueLink = by.className('homework--link');
    Homework = by.css('.card div p');


    getDomain(){
        browser.ignoreSynchronization = true;
        env.setenv(config);
        var url = 'https://'+ env.getenv();
        return url;
        } 



    loginToStudyPlanViaBackDoor(productConfig){
        browser.ignoreSynchronization = true;
        browser.get(this.getDomain()+'/login/atom/');
        browser.sleep(2000);
        this.User.sendKeys(kec_username);
        this.Password.sendKeys(kec_password);
        this.LoginSubmit.click();
        this.ProductCode.sendKeys(productConfig);
        this.ExternalUserID.sendKeys('hi');
        this.LoginSubmit.click(); 
        }   

    goToChannel(){
        browser.ignoreSynchronization = true;
        browser.get(this.getDomain()+'/channel/');
        } 

    loginToDashboardViaBackDoor(classCode){
        browser.ignoreSynchronization = true;
        browser.get(this.getDomain()+'/login/atom/');
        browser.sleep(2000);
        this.User.sendKeys(kec_username);
        this.Password.sendKeys(kec_password);
        this.LoginSubmit.click();
        this.ClassCode.sendKeys(classCode);
        this.ExternalUserID.sendKeys('hi');
        this.SubmitBtn.click(); 
        browser.get(this.getDomain()+'/dashboard/');
        browser.sleep(3000);
        } 


    loginToDashboardViaFrontDoor(email , password){
        browser.ignoreSynchronization = true;
        browser.get('http://www.kaptest.com/login.jhtml');
        browser.sleep(2000);
        element(this.Email).sendKeys(email);
        element(this.Pwd).sendKeys(password);
        element(this.LoginBtn).click();
        browser.sleep(2000);
        browser.get('https://www.kaptest.com/myaccount');
        browser.sleep(5000);
        var dom = this.getDomain();
        element(by.linkText('Access my Online Resources')).getAttribute('href').then(function(text){
            browser.get(dom+text.substring(23));
            browser.sleep(5000);
        });
        browser.get(this.getDomain()+'/dashboard/');
        browser.sleep(5000);
        } 

    getDashboardPageTitle(){
        //browser.ignoreSynchronization = true;
        return element (by.css('h1')).getText().then(function(text){
            return text;
        });
        }     

    getSessionTitle(){
        //browser.ignoreSynchronization = true;
        return element (by.css('h2')).getText().then(function(text){
            return text;
        });
        }

    getNoHomeworkText(){
        //browser.ignoreSynchronization = true;
        return element (this.Homework).getText().then(function(text){
            return text;
        });
        }


    getContinueLinkAddress(){
        //browser.ignoreSynchronization = true;
        return element (this.ContinueLink).getAttribute('href').then(function(text){
            return text;
        });
        }

    clickContinue(){
        //browser.ignoreSynchronization = true;
        element (this.ContinueLink).click();
        browser.sleep(5000);
        }

    


    verifyContinueLink(){
        //browser.ignoreSynchronization = true;
          return element (this.ContinueLink).isPresent().then(function(){
              console.log('Continue link visible');
              //this.clickContinue();
              return true;
          }, function(err){
                console.error("Continue link not displyed");
                return false;
        });
        }   


    verifyLessonTitle(){
        //browser.ignoreSynchronization = true;
          return element (by.css('h3')).isPresent().then(function(){
              console.log('Lesson Title link visible');
              return true;
          }, function(err){
                console.error("Lesson Title not displyed");
                return false;
        });
        } 

    verifyIconPresent(){
        //browser.ignoreSynchronization = true;
          return this.ICON.isPresent().then(function(){
              console.log('Icon visible');
              return true;
          }, function(err){
                console.error("Icon not displyed");
                return false;
        });
        } 


    verifyAssignmentTypePresent(){
        //browser.ignoreSynchronization = true;
          return this.AssignmenType.isPresent().then(function(){
              console.log('AssignmentType visible');
              return true;
          }, function(err){
                console.error("AssignmentType not displyed");
                return false;
        });
        } 


     verifyProgressBarPresent(){
        //browser.ignoreSynchronization = true;
          return this.ProgressComplete.isPresent().then(function(){
              console.log('% Complete visible');
              return true;
          }, function(err){
                console.error("% Complete not displyed");
                return false;
        });
        } 

    verifyTimeRemainingPresent(){
        //browser.ignoreSynchronization = true;
          return this.TimeRemaining.isPresent().then(function(){
              console.log('Time visible');
              return true;
          }, function(err){
                console.error("Time not displyed");
                return false;
        });
        } 




}
