// In Safari Driver.switchTo().activeElement() throws:
// WebDriverError: HTTP method 'POST' is not supported for command
// '/session/[session id]/element/active'.
const { Builder } = require('selenium-webdriver');
const { describe, it, before, after } = require('selenium-webdriver/testing');
const quitSafely = require('./utils/quitSafely');

describe('Driver.switchTo().activeElement()', function () {
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

  it('should not throw', function () {
    driver.get('http://example.com/');
    driver.switchTo().activeElement();
  });
});
