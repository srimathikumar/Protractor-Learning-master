"use strict";
const protractor_1 = require('protractor');
class studyPlanPage {
    constructor() {
        this.STUDY_PLAN_CANVA = protractor_1.element(protractor_1.by.css('content')); //canvas
        this.MORE_RESOURCES_TAB = protractor_1.element(protractor_1.by.css("[ng-class='doogie-top-nav-more-resources']"));
    }
    waitForStudyPlanToFinishLoading() {
        protractor_1.browser.driver.isElementPresent(this.STUDY_PLAN_CANVA).then(function (isPresent) {
            return isPresent;
        });
    }
    clickMoreResourcesTab() {
        this.MORE_RESOURCES_TAB.element(protractor_1.by.css('span')).click();
    }
}
exports.studyPlanPage = studyPlanPage;
//# sourceMappingURL=studyPlanPage.po.js.map