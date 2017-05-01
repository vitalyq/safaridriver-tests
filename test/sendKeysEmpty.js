// In Safari sendKeys('') throws:
// WebDriverError: An unknown server-side error occurred while processing the command.
const { Builder, By } = require('selenium-webdriver');
const { describe, it } = require('selenium-webdriver/testing');

function createElement() {
  var el = document.createElement('input');
  el.id = 'myInput';
  document.body.appendChild(el);
}

describe('WebElement.sendKeys()', function () {
  this.timeout(60000);

  it('should not throw when the argument is an empty string', function () {
    const driver = new Builder()
      .forBrowser('safari')
      .build();

    driver.get('http://example.com/');
    driver.executeScript(createElement);
    const el = driver.findElement(By.id('myInput'));
    el.sendKeys('');

    return driver.quit();
  });
});
