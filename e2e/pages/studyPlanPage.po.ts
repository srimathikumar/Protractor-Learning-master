import { browser, element, by, protractor} from 'protractor';

export class studyPlanPage{

STUDY_PLAN_CANVA = element(by.css('content'));//canvas
MORE_RESOURCES_TAB = element(by.css("[ng-class='doogie-top-nav-more-resources']"));

    waitForStudyPlanToFinishLoading(){
        browser.driver.isElementPresent(this.STUDY_PLAN_CANVA).then(function(isPresent){
            return isPresent;
        });
    }

    clickMoreResourcesTab(){
        this.MORE_RESOURCES_TAB.element(by.css('span')).click();
    }

}