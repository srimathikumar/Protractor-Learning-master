var util = require('util');
import { dashBoard } from './dashboard.po';
import { browser, element, by, protractor} from 'protractor';

describe ('Dashboard Tests -', function(){

    let dashboard: dashBoard;


    beforeEach(function () {
        browser.manage().deleteAllCookies();
        dashboard = new dashBoard();
    });

    describe('verifyLastSessionHomeworkComponents', function(){

        var testname= this.getFullName();


        it ('should load Dashboard', function(){
            
            console.log('------------'+testname+'------------');
            
            //Log into Kaptest and go to Dashboard for GRE
            dashboard.loginToDashboardViaBackDoor('RAAGL16225');

            //Verify last session homework elements
            dashboard.getDashboardPageTitle().then(function(text){
                expect(text).toBe('Dashboard');
            });
            browser.sleep(5000);
            dashboard.getSessionTitle().then(function(text){
                expect(text).toBe('After Class');
            });

            expect (dashboard.verifyContinueLink()).toBe(true);
            expect (dashboard.verifyLessonTitle()).toBe(true);
            expect (dashboard.verifyIconPresent()).toBe(true);
            expect (dashboard.verifyAssignmentTypePresent()).toBe(true);
            expect (dashboard.verifyProgressBarPresent()).toBe(true);


        });
    });  


    describe('verifyContinueLinkWorks', function(){

        var testname= this.getFullName();
        it ('should load Dashboard', function(){

            console.log('------------'+testname+'------------');
            
            //Log into Kaptest and go to Dashboard for GRE
            dashboard.loginToDashboardViaBackDoor('RAAGL16225');

            //Verify last session homework elements
            dashboard.getDashboardPageTitle().then(function(text){
                console.log(text);
                expect(text).toBe('Dashboard');
            });

            browser.sleep(2000);
            
            //get href for continue link and then make sure its redirecing correctly
            dashboard.getContinueLinkAddress().then(function(text){
                element (by.className('homework--link')).click();
                browser.sleep(5000);
                console.log (text + "----- ContinueLinkAddress");
                // console.log (browser.getCurrentUrl().toString()+'==============');
                //expect (browser.getCurrentUrl()).toBe(text);
                browser.getCurrentUrl().then(function(url){
                    console.log(url + "----- Studyplan url");
                    expect(url).toBe(text);
                })
            });
        });  
     });    


     describe('verify sat account', function(){

        var testname= this.getFullName();
        fit ('tests front door login + homework as session title', function(){
            console.log('------------'+testname+'------------');
            
            //front door login
            dashboard.loginToDashboardViaFrontDoor('sat6@kaptest.com','kaptest');

            //verifying SAT account has homework instead of after class
            //Test
            dashboard.getSessionTitle().then(function(text){
                expect(text).toBe('Homework');
            });

         });  
     });   



     describe('verify MCAT account', function(){

        var testname= this.getFullName();
        it ('test MCAT account + after class', function(){
            console.log('------------'+testname+'------------');
            
            dashboard.loginToDashboardViaBackDoor('MRGL14025');
            dashboard.getSessionTitle().then(function(text){
                expect(text).toBe('After Class');
            });

         });  
     });


    describe('verify no homework', function(){

        var testname= this.getFullName();
        it ('verifies no homwork', function(){
            console.log('------------'+testname+'------------');
            
            //Lsat account
            dashboard.loginToDashboardViaBackDoor('LAOTO16033');
            browser.sleep(5000);
            dashboard.getNoHomeworkText().then(function(text){
                expect(text).toBe('NO HOMEWORK YET');
            });

         });  
     });
});