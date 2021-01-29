describe('Protractor Demo App', function() {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));
  
    beforeEach(function() {
      browser.get('http://juliemr.github.io/protractor-demo/');
    });
  
    it('should have a title', function() {
      expect(browser.getTitle()).toEqual('Super Calculator');
    });
  
    it('should add "15" and "15"', function() {
      firstNumber.sendKeys(15);
      secondNumber.sendKeys(15);
  
      goButton.click();
  
      expect(latestResult.getText()).toEqual('30');
    });
  
    it('should add "50" and "50"', function() {
        firstNumber.sendKeys(50);
        secondNumber.sendKeys(50);
    
        goButton.click();
      expect(latestResult.getText()).toEqual('100');
    });

    it('should add "31" and "32"', function() {
        firstNumber.sendKeys(31);
        secondNumber.sendKeys(32);
    
        goButton.click();
      expect(latestResult.getText()).toEqual('73');
    });
  
    it('should add "44" and "46"', function() {
        firstNumber.sendKeys(44);
        secondNumber.sendKeys(46);
    
        goButton.click();
      expect(latestResult.getText()).toEqual('100');
    });
  
});