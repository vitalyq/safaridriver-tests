// In Safari Driver.switchTo().activeElement() throws:
// WebDriverError: HTTP method 'POST' is not supported for command
// '/session/[session id]/element/active'.
const { Builder } = require('selenium-webdriver');
const { describe, it, before, after } = require('selenium-webdriver/testing');
const safari = require('selenium-webdriver/safari');
const quitSafely = require('./utils/quitSafely');

describe('Driver.switchTo().activeElement()', function () {
  this.timeout(60000);
  let driver;

  before(function () {
    const safariOptions = new safari.Options()
      .setTechnologyPreview(true);

    driver = new Builder()
      .forBrowser('safari')
      .setSafariOptions(safariOptions)
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
