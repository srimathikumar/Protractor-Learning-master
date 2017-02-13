"use strict";
var envConfig = (function () {
    function envConfig() {
        this.ENVIRONMENT = 'qa';
    }
    envConfig.prototype.setenv = function (envtext) {
        this.ENVIRONMENT = envtext;
    };
    envConfig.prototype.getenv = function () {
        var result;
        if (this.ENVIRONMENT === "qa") {
            result = 'qa-atom';
        }
        else if (this.ENVIRONMENT === "feature5") {
            result = 'feature5-atom';
        }
        else if (this.ENVIRONMENT === "feature6") {
            result = 'feature6-atom';
        }
        else if (this.ENVIRONMENT === "staging") {
            result = 'dark-atom';
        }
        else if (this.ENVIRONMENT === "production") {
            result = 'atom';
        }
        else {
            console.log('VALID INPUT NOT RECIEVED FOR SETTING ENVIRONMENT...DEFAULTING TO QA');
            result = 'qa-atom';
        }
        return result + '.kaptest.com';
    };
    return envConfig;
}());
exports.envConfig = envConfig;
