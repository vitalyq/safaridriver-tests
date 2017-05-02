// Safari WebDriver doesn't wait for a page load when get()
// is called second or subsequent time after driver instantiation.
// Setting pageLoadTimeout doesn't resolve the issue.
const { Builder } = require('selenium-webdriver');
const { describe, it, before, after } = require('selenium-webdriver/testing');
const assert = require('assert');
const quitSafely = require('./utils/quitSafely');

describe('Driver.get()', function () {
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

  it('should wait for a page load if called second or subsequent time', function () {
    driver.get('http://www.google.com/ncr');
    driver.get('http://example.com/');
    driver.getTitle()
      .then(title => assert.strictEqual(title, 'Example Domain'));
  });
});
