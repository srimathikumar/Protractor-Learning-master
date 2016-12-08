"use strict";
const protractor_1 = require('protractor');
class qbankPage {
    constructor() {
        this.QUESTION_TEXT = protractor_1.element(protractor_1.by.xpath("//div[@id='content-highlighting-wrap']/div/p/span"));
        this.HIGHLIGHTED_TEXT = protractor_1.element.all(protractor_1.by.className('atom-highlight'));
    }
    highlightText() {
        protractor_1.browser.actions().doubleClick(this.QUESTION_TEXT.getWebElement()).perform();
    }
    getHighlightedText() {
        var text = '';
        this.HIGHLIGHTED_TEXT.each(function (item) {
            item.getText().then(function (txt) {
                console.log(txt);
                text = text + txt;
            });
        });
        console.log(text);
    }
}
exports.qbankPage = qbankPage;
//# sourceMappingURL=qbank.po.js.map