// In Safari sendKeys('') throws:
// WebDriverError: An unknown server-side error occurred while processing the command.
const { Builder, By } = require('selenium-webdriver');
const { describe, it, before, after } = require('selenium-webdriver/testing');

function createElement() {
  var el = document.createElement('input');
  el.id = 'myInput';
  document.body.appendChild(el);
}

describe('WebElement.sendKeys()', function () {
  this.timeout(60000);
  let driver;

  before(function () {
    driver = new Builder()
      .forBrowser('safari')
      .build();
  });

  after(function () {
    driver.quit();
  });

  it('should not throw when the argument is an empty string', function () {
    driver.get('http://example.com/');
    driver.executeScript(createElement);
    const el = driver.findElement(By.id('myInput'));
    el.sendKeys('');
  });
});
