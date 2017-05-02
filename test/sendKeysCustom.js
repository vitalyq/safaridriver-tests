// In Safari WebElement.sendKeys() doesn't send custom keys like Key.BACK_SPACE.
const { Builder, By, Key } = require('selenium-webdriver');
const { describe, it, before, after } = require('selenium-webdriver/testing');
const assert = require('assert');

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

  it('should send custom keys', function () {
    driver.get('http://example.com/');
    driver.executeScript(createElement);
    const el = driver.findElement(By.id('myInput'));
    el.sendKeys('x', Key.BACK_SPACE);
    el.getAttribute('value')
      .then(value => assert.strictEqual(value, ''));
  });
});
