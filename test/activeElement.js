// In Safari Driver.switchTo().activeElement() throws:
// WebDriverError: HTTP method 'POST' is not supported for command
// '/session/[session id]/element/active'.
const { Builder } = require('selenium-webdriver');
const { describe, it } = require('selenium-webdriver/testing');

describe('Driver.switchTo().activeElement()', function () {
  this.timeout(60000);

  it('should not throw', function () {
    const driver = new Builder()
      .forBrowser('safari')
      .build();

    driver.get('http://example.com/');
    driver.switchTo().activeElement();

    return driver.quit();
  });
});
