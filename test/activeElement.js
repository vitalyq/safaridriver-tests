// In Safari Driver.switchTo().activeElement() throws:
// WebDriverError: HTTP method 'POST' is not supported for command
// '/session/[session id]/element/active'.
const { Builder } = require('selenium-webdriver');
const { describe, it, before, after } = require('selenium-webdriver/testing');

describe('Driver.switchTo().activeElement()', function () {
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

  it('should not throw', function () {
    driver.get('http://example.com/');
    driver.switchTo().activeElement();
  });
});
