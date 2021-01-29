var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function () {


    this.Given(/^go to website "http://juliemr.github.io/protractor-demo"$/, function () {
        browser.get('http://juliemr.github.io/protractor-demo/');
        return browser.getTitle().then(function(text){
        expect(text).to.equal('Super Calculator');
     });
 }

    this.When(/^I enter "15" in the first field$/, function () {
       return element(by.model('first')).sendKeys('15'); 
    });

    this.When(/^I enter "15" in the second field$/, function () {
       return element(by.model('second')).sendKeys('15');
    });

    this.When(/^I click Go button$/, function () {
        return element(by.id('gobutton')).click();
    });

    this.Then(/^displayed output should be "30"$/, function () {
        return element(by.repeater('result in memory')).all(by.tagName('td')).get(2).getText().then(function(text){
        expect(text).to.equal('30');
        });
    });

    this.Given(/^go to website 'http://juliemr.github.io/protractor-demo/'$/, function () {
        browser.get('http://juliemr.github.io/protractor-demo/');
        return browser.getTitle().then(function(text){
        expect(text).to.equal('Super Calculator');
     });

    this.When(/^I enter "50" in the first field$/, function () {
       return element(by.model('first')).sendKeys('50'); 
    });

    this.When(/^I enter "50" in the second field$/, function () {
       return element(by.model('second')).sendKeys('50');
    });

    this.When(/^I click Go button$/, function () {
        return element(by.id('gobutton')).click();
    });

    this.Then(/^displayed output should be "100"$/, function () {
        return element(by.repeater('result in memory')).all(by.tagName('td')).get(2).getText().then(function(text){
        expect(text).to.equal('100');
        });
    });

    this.Given(/^go to website 'http://juliemr.github.io/protractor-demo/'$/, function () {
        browser.get('http://juliemr.github.io/protractor-demo/');
        return browser.getTitle().then(function(text){
        expect(text).to.equal('Super Calculator');
     });

    this.When(/^I enter "31" in the first field$/, function () {
       return element(by.model('first')).sendKeys('31'); 
    });

    this.When(/^I enter "32" in the second field$/, function () {
       return element(by.model('second')).sendKeys('32');
    });

    this.When(/^I click Go button$/, function () {
        return element(by.id('gobutton')).click();
    });

    this.Then(/^displayed output should be "73"$/, function () {
        return element(by.repeater('result in memory')).all(by.tagName('td')).get(2).getText().then(function(text){
        expect(text).to.equal('73');
        });
    });

    this.Given(/^go to website 'http://juliemr.github.io/protractor-demo/'$/, function () {
        browser.get('http://juliemr.github.io/protractor-demo/');
        return browser.getTitle().then(function(text){
        expect(text).to.equal('Super Calculator');
     });

    this.When(/^I enter "44" in the first field$/, function () {
       return element(by.model('first')).sendKeys('44'); 
    });

    this.When(/^I enter "46" in the second field$/, function () {
       return element(by.model('second')).sendKeys('46');
    });

    this.When(/^I click Go button$/, function () {
        return element(by.id('gobutton')).click();
    });

    this.Then(/^displayed output should be "100"$/, function () {
        return element(by.repeater('result in memory')).all(by.tagName('td')).get(2).getText().then(function(text){
        expect(text).to.equal('100');
        });
    });
