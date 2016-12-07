"use strict";
var protractor_1 = require('protractor');
var studyPlanPage = (function () {
    function studyPlanPage() {
        this.STUDY_PLAN_CANVA = protractor_1.element(protractor_1.by.css('content')); //canvas
        this.MORE_RESOURCES_TAB = protractor_1.element(protractor_1.by.css("[ng-class='doogie-top-nav-more-resources']"));
    }
    studyPlanPage.prototype.waitForStudyPlanToFinishLoading = function () {
        protractor_1.browser.driver.isElementPresent(this.STUDY_PLAN_CANVA).then(function (isPresent) {
            return isPresent;
        });
    };
    studyPlanPage.prototype.clickMoreResourcesTab = function () {
        this.MORE_RESOURCES_TAB.element(protractor_1.by.css('span')).click();
    };
    return studyPlanPage;
}());
exports.studyPlanPage = studyPlanPage;
//# sourceMappingURL=studyPlanPage.po.js.map