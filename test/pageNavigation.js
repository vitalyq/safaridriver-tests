// Safari WebDriver doesn't wait for the page to load when get()
// is called second or subsequent time after driver instantiation.
// Setting pageLoadTimeout doesn't resolve the issue.
const { Builder } = require('selenium-webdriver');
const { describe, it } = require('selenium-webdriver/testing');
const assert = require('assert');

describe('selenium-webdriver', function () {
  this.timeout(60000);

  it('#get()', function () {
    const driver = new Builder()
      .forBrowser('safari')
      .build();

    driver.get('http://www.google.com/ncr');
    driver.get('http://example.com/');
    driver.getTitle()
      .then(title => assert.strictEqual(title, 'Example Domain'));

    return driver.quit();
  });
});
