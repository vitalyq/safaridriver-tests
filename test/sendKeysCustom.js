// In Safari WebElement.sendKeys() doesn't send custom keys like Key.BACK_SPACE.
const { Builder, By, Key } = require('selenium-webdriver');
const { describe, it } = require('selenium-webdriver/testing');
const assert = require('assert');

function createElement() {
  var el = document.createElement('input');
  el.id = 'myInput';
  document.body.appendChild(el);
}

describe('WebElement.sendKeys()', function () {
  this.timeout(60000);

  it('should send custom keys', function () {
    const driver = new Builder()
      .forBrowser('safari')
      .build();

    driver.get('http://example.com/');
    driver.executeScript(createElement);
    const el = driver.findElement(By.id('myInput'));
    el.sendKeys('x', Key.BACK_SPACE);
    el.getText()
      .then(text => assert.strictEqual(text, ''));

    return driver.quit();
  });
});
