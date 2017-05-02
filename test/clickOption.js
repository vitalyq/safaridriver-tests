// In Safari WebElement.click() doesn't select options of select elements.
const { Builder, By } = require('selenium-webdriver');
const { describe, it, before, after } = require('selenium-webdriver/testing');
const assert = require('assert');
const quitSafely = require('./utils/quitSafely');

function createSelect() {
  document.body.innerHTML = '<select><option>1</option><option>2</option></select>';
}

describe('WebElement.click()', function () {
  this.timeout(60000);
  let driver;

  before(function () {
    driver = new Builder()
      .forBrowser('safari')
      .build();
  });

  after(function () {
    return quitSafely(driver);
  });

  it('should select an option of a select element', function () {
    driver.get('http://example.com/');
    driver.executeScript(createSelect);
    const select = driver.findElement(By.css('select'));
    const option = driver.findElement(By.xpath('//option[2]'));
    option.click();
    select.getAttribute('selectedIndex')
      .then(index => assert.strictEqual(index, '1'));
  });
});
